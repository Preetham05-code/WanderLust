const axios = require("axios");

const WEBHOOK_URL = "https://preetham05.app.n8n.cloud/webhook/wanderlust-chat";

async function chatWithAI(message) {
    try {
        const response = await axios.post(WEBHOOK_URL, {
            message: message,
        });

        return response.data;
    } catch (err) {
        console.error("AI Service Error:", err.message);
        throw err;
    }
}

module.exports = {
    chatWithAI,
};