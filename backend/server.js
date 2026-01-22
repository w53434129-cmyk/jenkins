const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
