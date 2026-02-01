function sendMsg() {
  fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "hello" })
  })
  .then(r => r.json())
  .then(d => alert(d.reply));
}
