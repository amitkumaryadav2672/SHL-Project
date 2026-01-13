const path = require("path");
const fs = require("fs");
const { matchAssessments } = require("../utils/matcher");

const dataPath = path.join(__dirname, "..", "data", "shl_individual_tests.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

exports.recommendAssessments = (req, res) => {
  const { query } = req.body;
  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Query is required" });
  }
  const recommendations = matchAssessments(query, data);

  res.json({
    query,
    total_found: recommendations.length,
    recommendations
  });
};
