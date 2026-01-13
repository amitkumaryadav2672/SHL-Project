const express = require("express");
const cors = require("cors");

const recommendRoutes = require("./routes/recommendRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/api", recommendRoutes);

module.exports = app;
