const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

app.get("/", (req, res) => {
  res.send("Backend is alive via SSH tunnel!");
});

// Use environment variable if set, otherwise default to 3000
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0"; // <-- bind to all interfaces

app.listen(PORT, HOST, () => {
  console.log(`Backend running on ${HOST}:${PORT}`);
});
