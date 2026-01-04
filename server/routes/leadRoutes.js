// const express = require("express");
// const router = express.Router();
// const Lead = require("../models/Lead");
// //app.use("/api/blogs", blogRoutes);




// /**
//  * @route   POST /api/leads
//  * @desc    Save project enquiry lead
//  * @access  Public
//  */
// router.post("/", async (req, res) => {
//   try {
//     const { name, email, service, message } = req.body;

//     // Basic validation
//     if (!name || !email || !service || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const lead = new Lead({
//       name,
//       email,
//       service,
//       message,
//     });

//     await lead.save();

//     console.log("✅ New Lead Saved:", lead);

//     res.status(201).json({
//       success: true,
//       message: "Lead saved successfully",
//     });
//   } catch (error) {
//     console.error("❌ Lead save error:", error);

//     res.status(500).json({
//       success: false,
//       message: "Server error. Failed to save lead",
//     });
//   }
// });

// /**
//  * @route   GET /api/leads
//  * @desc    Get all leads (for admin/testing)
//  * @access  Public (make protected later)
//  */
// router.get("/", async (req, res) => {
//   try {
//     const leads = await Lead.find().sort({ createdAt: -1 });

//     res.json({
//       success: true,
//       count: leads.length,
//       data: leads,
//     });
//   } catch (error) {
//     console.error("❌ Fetch leads error:", error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch leads",
//     });
//   }
// });

// module.exports = router;




















































// // const express = require("express");
// // const router = express.Router();
// // const { submitLead } = require("../controllers/leadController");

// // router.post("/", submitLead);

// // module.exports = router;




























// const express = require("express");
// const router = express.Router();
// const Lead = require("../models/Lead");

// /**
//  * @route   POST /api/leads
//  * @desc    Save project enquiry lead
//  * @access  Public
//  */
// router.post("/", async (req, res) => {
//   try {
//     const { name, email, service, projectDetails } = req.body;

//     // Validation
//     if (!name || !email || !service || !projectDetails) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const lead = new Lead({
//       name,
//       email,
//       service,
//       projectDetails,
//     });

//     await lead.save();

//     console.log("✅ Lead saved:", lead._id);

//     res.status(201).json({
//       success: true,
//       message: "Enquiry submitted successfully",
//     });
//   } catch (error) {
//     console.error("❌ Lead Save Error:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Server error. Failed to save enquiry",
//     });
//   }
// });

// /**
//  * @route   GET /api/leads
//  * @desc    Get all leads (testing/admin)
//  * @access  Public
//  */
// router.get("/", async (req, res) => {
//   try {
//     const leads = await Lead.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: leads.length,
//       data: leads,
//     });
//   } catch (error) {
//     console.error("❌ Fetch Leads Error:", error.message);

//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch leads",
//     });
//   }
// });

// module.exports = router;





// const express = require("express");
// const router = express.Router();
// const { submitLead } = require("../controllers/leadController");

// // POST: submit enquiry
// router.post("/", submitLead);

// // GET: fetch all leads (testing/admin)
// router.get("/", async (req, res) => {
//   try {
//     const Lead = require("../models/Lead");
//     const leads = await Lead.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: leads.length,
//       data: leads,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch leads",
//     });
//   }
// });

// module.exports = router;














// const express = require("express");
// const router = express.Router();
// const Lead = require("../models/Lead");

// // CREATE ENQUIRY
// router.post("/", async (req, res) => {
//   try {
//     console.log("📩 ENQUIRY:", req.body);

//     const { name, email, service, message } = req.body;

//     if (!name || !email || !service || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const lead = await Lead.create({
//       name,
//       email,
//       service,
//       message,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Enquiry submitted successfully",
//       data: lead,
//     });
//   } catch (error) {
//     console.error("❌ LEAD ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// });

// // GET ALL ENQUIRIES
// router.get("/", async (req, res) => {
//   const leads = await Lead.find().sort({ createdAt: -1 });
//   res.json({ success: true, data: leads });
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

// CREATE LEAD
router.post("/", async (req, res) => {
  try {
    console.log("📩 LEAD RECEIVED:", req.body);

    const lead = await Lead.create(req.body);

    res.status(201).json({
      success: true,
      message: "Lead submitted successfully",
      data: lead,
    });
  } catch (error) {
    console.error("❌ LEAD ERROR:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// GET ALL LEADS
router.get("/", async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json({ success: true, data: leads });
});

module.exports = router;
