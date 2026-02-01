function sendMsg() {
  const input = document.getElementById("msg");
  const output = document.getElementById("output");

  const text = input.value.trim();
  if (!text) return;

  fetch(`${window.location.origin}/chat`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: text })
})

  .then(r => r.json())
  .then(d => {
    output.innerText = d.reply;
    input.value = "";
  })
  .catch(() => {
    output.innerText = "Server error";
  });
}
