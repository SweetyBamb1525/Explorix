// const express = require("express");
// const router = express.Router();
// const Review = require("../models/Review");

// // POST /api/reviews
// router.post("/", async (req, res) => {
//   try {
//     const review = await Review.create(req.body);
//     res.status(201).json({
//       success: true,
//       message: "Review submitted",
//       data: review,
//     });
//   } catch (error) {
//     console.error("REVIEW ERROR:", error.message);
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // GET /api/reviews
// router.get("/", async (req, res) => {
//   try {
//     const reviews = await Review.find().sort({ createdAt: -1 });
//     res.json({
//       success: true,
//       data: reviews,
//     });
//   } catch (error) {
//     console.error("FETCH REVIEWS ERROR:", error.message);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// module.exports = router;






// const express = require("express");
// const router = express.Router();
// const Review = require("../models/review");

// // CREATE REVIEW
// router.post("/", async (req, res) => {
//   try {
//     const review = await Review.create(req.body);
//     res.status(201).json({
//       success: true,
//       data: review,
//     });
//   } catch (error) {
//     console.error("REVIEW CREATE ERROR:", error.message);
//     res.status(500).json({
//       success: false,
//       message: "Failed to submit review",
//     });
//   }
// });

// // GET ALL REVIEWS
// router.get("/", async (req, res) => {
//   try {
//     const reviews = await Review.find().sort({ createdAt: -1 });
//     res.status(200).json({
//       success: true,
//       data: reviews,
//     });
//   } catch (error) {
//     console.error("REVIEW FETCH ERROR:", error.message);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch reviews",
//     });
//   }
// });

// module.exports = router;






// const express = require("express");
// const router = express.Router();
// const Review = require("../models/review"); // ✅ correct
// router.post("/", async (req, res) => {
//   console.log("📥 Incoming Review:", req.body); // 👈 ADD THIS

//   try {
//     const review = await Review.create(req.body);
//     res.status(201).json({ success: true, data: review });
//   } catch (error) {
//     console.error("REVIEW ERROR:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// });


// router.get("/", async (req, res) => {
//   try {
//     const reviews = await Review.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: reviews });
//   } catch (error) {
//     console.error("FETCH ERROR:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const Review = require("./models/review");

// router.post("/", async (req, res) => {
//   console.log("🔥 REVIEW API HIT 🔥");
//   console.log(req.body);

//   try {
//     const review = await Review.create(req.body);
//     res.status(201).json({ success: true, data: review });
//   } catch (error) {
//     console.error("❌ REVIEW SAVE ERROR:", error.message);
//     res.status(500).json({ success: false, message: error.message });
//   }
// });


// router.get("/", async (req, res) => {
//   try {
//     const reviews = await Review.find().sort({ createdAt: -1 });
//     res.json({
//       success: true,
//       data: reviews,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// module.exports = router;




const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// CREATE REVIEW
router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json({ success: true, data: review });
  } catch (error) {
    console.error("❌ Review Save Error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// GET REVIEWS
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
