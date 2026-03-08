const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messaging");
const moderationRoutes = require("./routes/moderation");

const app = express();
const PORT = process.env.PORT || 3000;

// Security & logging
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../public")));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/moderation", moderationRoutes);

// Test route
app.get("/api/ping", (req, res) => res.json({ message: "Server alive" }));

// SPA catch-all
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(PORT, () => console.log(`🚀 ShadowChat running on port ${PORT}`));