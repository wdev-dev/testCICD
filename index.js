const express = require("express");
const path = require("path");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.get("/", async (req, res) => {
  return res.sendFile(__dirname + "/public/home.html");
});

app.use(express.static(__dirname + "/public"));

// Health check for CI/CD
app.get("/health", (req, res) => {
  res.json({
    status: "success",
    message: "CI/CD application is running",
    version: "1.0.0",
  });
});

// API test
app.get("/api/test", (req, res) => {
  res.json({
    message: "CI/CD API is working successfully",
    timestamp: new Date().toISOString() + 'Well Worked',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
