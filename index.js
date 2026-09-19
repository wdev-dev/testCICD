const express = require("express");
const path = require("path");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Health check for CI/CD
app.get("/health", (req, res) => {
    res.json({
        status: "success",
        message: "CI/CD application is running",
        version: "1.0.0"
    });
});

// API test
app.get("/api/test", (req, res) => {
    res.json({
        message: "CI/CD API is working successfully",
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});