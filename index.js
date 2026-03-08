// server.js (Final Production Version)
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Security headers
app.use(helmet());

// Logging requests
app.use(morgan("dev"));

// Serve static frontend from /public
app.use(express.static(path.join(__dirname, "public")));

// API route example (future chat features)
app.get("/api/ping", (req, res) => {
  res.json({ message: "Server is alive!" });
});

// Catch-all route to serve index.html for SPA routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Shadow-chat frontend & API running on port ${PORT}`);
});