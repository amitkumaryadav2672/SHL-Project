const express = require("express");
const router = express.Router();

const {
  recommendAssessments,
} = require("../controllers/recommendController");

router.post("/recommend", recommendAssessments);

module.exports = router;
