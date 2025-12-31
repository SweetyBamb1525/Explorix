// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const connectDB = require("./config/db");

// const app = express();

// // ================= MIDDLEWARE =================
// app.use(cors());
// app.use(express.json());
// app.use("/api/blogs", blogRoutes);
// app.use("/api/reviews", require("./routes/reviewRoutes"));



// // ================= DATABASE ===================
// connectDB();

// // ================= TEST ROUTES ================
// app.get("/", (req, res) => {
//   res.send("Explorix Backend Running");
// });

// app.get("/api/test", (req, res) => {
//   res.json({
//     success: true,
//     message: "API working fine 🚀",
//   });
// });

// // ================= ROUTES =====================

// // project routes (if you already created)
// app.use("/api/projects", require("./routes/projectRoutes"));

// // leads / form submission routes
// app.use("/api/leads", require("./routes/leadRoutes"));

// // ================= SERVER =====================
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// // middleware
// app.use(cors());
// app.use(express.json());

// // ROUTES (IMPORT FIRST)
// const projectRoutes = require("./routes/projectRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");
// const blogRoutes = require("./routes/blogRoutes"); // ✅ FIX

// // USE ROUTES
// app.use("/api/projects", projectRoutes);
// app.use("/api/reviews", reviewRoutes);
// app.use("/api/blogs", blogRoutes); // ✅ FIX

// // TEST ROUTE
// app.get("/", (req, res) => {
//   res.send("Explorix Backend Running");
// });

// app.get("/api/test", (req, res) => {
//   res.json({ success: true, message: "API working" });
// });

// // DB CONNECT
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// // SERVER
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ROUTES
// const leadRoutes = require("./routes/leadRoutes");
// app.use("/api/leads", leadRoutes);

// // TEST ROUTE
// app.get("/api/test", (req, res) => {
//   res.json({ success: true, message: "API working fine" });
// });

// // HOME
// app.get("/", (req, res) => {
//   res.send("Explorix Backend Running");
// });

// // DATABASE CONNECT
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log("MongoDB Error:", err));

// // SERVER
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ROUTES
// app.use("/api/contact", require("./routes/contactRoutes"));

// // TEST
// app.get("/api/test", (req, res) => {
//   res.json({ success: true, message: "API working fine" });
// });

// // HOME
// app.get("/", (req, res) => {
//   res.send("Explorix Backend Running");
// });

// // DB CONNECT
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ Mongo Error:", err));

// // SERVER
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });










// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// /* =========================
//    MIDDLEWARE
// ========================= */
// app.use(cors({
//   origin: "http://localhost:3000", // frontend
//   credentials: true
// }));
// app.use(express.json());

// /* =========================
//    ROUTES
// ========================= */
// app.use("/api/blogs", require("./routes/blogRoutes"));
// app.use("/api/leads", require("./routes/leadRoutes"));
// app.use("/api/contact", require("./routes/contactRoutes"));
// app.use("/api/projects", require("./routes/projectRoutes"));
// app.use("/api/reviews", require("./routes/reviewRoutes"));

// /* =========================
//    TEST ROUTE
// ========================= */
// app.get("/api/test", (req, res) => {
//   res.json({
//     success: true,
//     message: "Backend & API working perfectly 🚀",
//   });
// });

// /* =========================
//    HOME ROUTE
// ========================= */
// app.get("/", (req, res) => {
//   res.send("Explorix Backend Running Successfully 🚀");
// });

// /* =========================
//    DATABASE CONNECT
// ========================= */
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ MongoDB Connected Successfully");
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err);
//   });

// /* =========================
//    SERVER START
// ========================= */
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });




















// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // CONNECT DATABASE
// connectDB();

// // ROUTES
// app.use("/api/leads", require("./routes/leadRoutes"));
// app.use("/api/contact", require("./routes/contactRoutes"));
// app.use("/api/blogs", require("./routes/blogRoutes"));

// app.get("/", (req, res) => {
//   res.send("Explorix Backend Running 🚀");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/blogs", require("./routes/blogRoutes"));
// app.use("/api/leads", require("./routes/leadRoutes"));
// app.use("/api/reviews", require("./routes/reviewRoutes"));

// // Test
// app.get("/api/test", (req, res) => {
//   res.json({ success: true, message: "API working" });
// });

// // Home
// app.get("/", (req, res) => {
//   res.send("Explorix Backend Running 🚀");
// });

// // DB + Server
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(5000, () =>
//       console.log("🚀 Server running at http://localhost:5000")
//     );
//   })
//   .catch((err) => console.error("❌ Mongo Error:", err));




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/blogs", require("./routes/blogRoutes"));
// app.use("/api/leads", require("./routes/leadRoutes"));
// app.use("/api/contact", require("./routes/contactRoutes"));

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(5000, () =>
//       console.log("🚀 Server running at http://localhost:5000")
//     );
//   })
//   .catch((err) => console.error(err));



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ROUTES
// app.use("/api/blogs", require("./routes/blogRoutes"));
// app.use("/api/leads", require("./routes/leadRoutes"));
// app.use("/api/contact", require("./routes/contactRoutes"));
// app.use("/api/reviews", require("./routes/reviewRoutes")); // <-- reviews route added

// // MONGODB CONNECTION
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(5000, () => {
//       console.log("🚀 Server running at http://localhost:5000");
//     });
//   })
//   .catch((err) => console.error(err));







// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // =====================
// // MIDDLEWARE
// // =====================
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // =====================
// // ROUTES
// // =====================
// app.use("/api/blogs", require("./routes/blogRoutes"));
// app.use("/api/leads", require("./routes/leadRoutes"));
// app.use("/api/contact", require("./routes/contactRoutes"));
// app.use("/api/reviews", require("./routes/reviewRoutes"));

// // =====================
// // MONGODB CONNECTION
// // =====================
// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected Successfully");
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err.message);
//     process.exit(1);
//   });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Added JWT
require("dotenv").config();

const app = express();

// =====================
// MIDDLEWARE
// =====================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =====================
// JWT HELPER FUNCTIONS
// =====================

// Function to generate a token
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1]; // Expecting "Bearer <token>"

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = decoded; // Attach decoded data to request
    next();
  });
};

// =====================
// ROUTES
// =====================
// Example of protected route
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ message: "You accessed a protected route!", user: req.user });
});

app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/leads", require("./routes/leadRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));

// =====================
// MONGODB CONNECTION
// =====================
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

module.exports = { generateToken, verifyToken }; // Export for use in routes
