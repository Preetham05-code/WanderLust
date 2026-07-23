const chatButton = document.getElementById("ai-chat-button");
const chatBox = document.getElementById("ai-chat-box");
const closeBtn = document.getElementById("close-chat");

const sendBtn = document.getElementById("send-message");
const input = document.getElementById("user-message");
const messages = document.getElementById("chat-messages");

chatButton.addEventListener("click", () => {
    chatBox.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    chatBox.classList.add("hidden");
});

// ---------- Helper Function ----------

function addMessage(text, sender) {

    const div = document.createElement("div");

    div.className = sender;

    div.innerText = text;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
}

// ---------- Send Message ----------

async function sendMessage() {

    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user-message");

    input.value = "";
    const typing = document.createElement("div");
    typing.className = "bot-message";
    typing.id = "typing";

    typing.innerHTML = "🤖 <span class='dots'>Typing...</span>";

    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    try {

        const response = await fetch("/api/ai/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message

            })

        });

        const data = await response.json();

        console.log(data);

        const aiReply =
            data.output ||
            data.reply ||
            data.message ||
            "Sorry, I couldn't understand that.";

document.getElementById("typing")?.remove();

addMessage(aiReply, "bot-message");

    } catch (err) {

        addMessage("❌ Something went wrong.", "bot-message");

        console.error(err);

    }

}

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        sendMessage();

    }

});

setTimeout(() => {

    document.getElementById("ai-welcome").style.display = "none";

}, 5000);