const axios = require("axios");
const Listing = require("../models/listing");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${GEMINI_API_KEY}`;

async function chatWithAI(message) {
    try {
        // Fetch all listings from your database
        const listings = await Listing.find({}).select("title price location country");

        // Build a compact summary of listings for the AI
        const listingSummary = listings.map(l => 
            `- ${l.title} | ₹${l.price}/night | ${l.location}, ${l.country}`
        ).join("\n");

        const systemPrompt = `You are WanderLust AI, a friendly travel assistant for a vacation rental website (like Airbnb). You help users find destinations, give travel tips, and recommend stays.

You have access to the following actual listings in our database. Only recommend stays from this list. If no listing matches the user's request, say so honestly — do not make up listings.

AVAILABLE LISTINGS:
${listingSummary}

Keep responses concise and friendly. If asked about non-travel topics, gently steer back to travel.

User message: ${message}`;

        const response = await axios.post(GEMINI_URL, {
            contents: [
                {
                    parts: [{ text: systemPrompt }]
                }
            ],
                generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 2048,
            },

        });

        const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
        
        return { 
            output: reply || "Sorry, I couldn't generate a response. Please try again." 
        };
    } catch (err) {
        console.error("AI Service Error:", err.response?.data || err.message);
        throw err;
    }
}

module.exports = {
    chatWithAI,
};
