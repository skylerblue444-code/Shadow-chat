// Navigation
const sections = document.querySelectorAll("main > section");
const buttons = document.querySelectorAll("nav button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    sections.forEach(sec => sec.classList.remove("active"));
    const target = btn.id.replace("btn-", "");
    document.getElementById(target).classList.add("active");
  });
});

// Chat placeholder
const messagesDiv = document.getElementById("messages");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
  const msg = chatInput.value.trim();
  if(msg) {
    const p = document.createElement("p");
    p.textContent = `You: ${msg}`;
    messagesDiv.appendChild(p);
    chatInput.value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
});

// Wallet placeholder
document.getElementById("refresh-wallet").addEventListener("click", () => {
  document.getElementById("btc-balance").textContent = (Math.random()*0.1).toFixed(4);
  document.getElementById("doge-balance").textContent = (Math.random()*100).toFixed(2);
  document.getElementById("trump-balance").textContent = (Math.random()*50).toFixed(2);
});