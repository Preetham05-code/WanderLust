const { chatWithAI } = require("../services/aiService");

module.exports.chat = async (req, res) => {
    try {
        const { message } = req.body;
        const reply = await chatWithAI(message);
        res.json(reply);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "AI service failed",
        });
    }
};