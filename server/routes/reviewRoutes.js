const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// POST /api/reviews
router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json({
      success: true,
      message: "Review submitted",
      data: review,
    });
  } catch (error) {
    console.error("REVIEW ERROR:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// GET /api/reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.error("FETCH REVIEWS ERROR:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
