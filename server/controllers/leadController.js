// const Lead = require("../models/Lead");
// const nodemailer = require("nodemailer");

// exports.submitLead = async (req, res) => {
//   try {
//     const { name, email, service, message } = req.body;

//     // Save lead to DB
//     const lead = new Lead({ name, email, service, message });
//     await lead.save();

//     // Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Confirmation email to user
//     const userMailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Thank you for connecting with Explorix!",
//       text: `Hi ${name},

// Thank you for connecting with Explorix! 🚀
// We have received your request for "${service}".
// Our team will contact you shortly.

// Best regards,
// Team Explorix`,
//     };

//     await transporter.sendMail(userMailOptions);

//     // Optional: notify team
//     const adminMailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "team@explorix.com", // replace with your team email
//       subject: `New Lead: ${name} - ${service}`,
//       text: `New lead submitted:\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
//     };

//     await transporter.sendMail(adminMailOptions);

//     // Update emailSent
//     lead.emailSent = true;
//     await lead.save();

//     res.status(201).json({ message: "Lead saved and email sent successfully" });
//   } catch (err) {
//     console.error("Lead submit error:", err);
//     res.status(500).json({ message: "Server error. Could not submit lead." });
//   }
// };




































const Lead = require("../models/Lead");
const nodemailer = require("nodemailer");

exports.submitLead = async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    if (!name || !email || !service) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // SAVE DATA FIRST
    const lead = await Lead.create({
      name,
      email,
      service,
      message,
    });

    // TRY EMAIL (NON-BLOCKING)
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for connecting with Explorix!",
        text: `Hi ${name}, we received your enquiry for ${service}.`,
      });

      lead.emailSent = true;
      await lead.save();
    } catch (emailErr) {
      console.log("Email failed but data saved");
    }

    res.status(201).json({
      success: true,
      message: "Lead submitted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
