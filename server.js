const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Render free tier provides port via environment variable
const PORT = process.env.PORT || 3000;

// Serve static files (JS, CSS, images)
app.use(express.static(path.join(__dirname)));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/chat', (req, res) => {
  const msg = req.body.message || "";
  res.json({ reply: "Server bilkul theek chal raha hai 👍" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
