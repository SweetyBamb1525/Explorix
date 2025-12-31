// const express = require("express");
// const router = express.Router();
// const Lead = require("../models/Lead");

// // POST Contact / Enquiry
// router.post("/", async (req, res) => {
//   try {
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
//     console.error("CONTACT ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// });

// // GET all enquiries (testing)
// router.get("/", async (req, res) => {
//   const leads = await Lead.find().sort({ createdAt: -1 });
//   res.json({ success: true, data: leads });
// });

// module.exports = router;





const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: Create new contact enquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject: service || "General Enquiry",
      message,
    });

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: contact,
    });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// GET: Fetch all enquiries (for testing / admin)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
