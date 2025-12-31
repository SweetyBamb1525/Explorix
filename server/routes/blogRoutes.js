// const express = require("express");
// const router = express.Router();
// const Blog = require("../models/Blog");

// // CREATE BLOG
// router.post("/", async (req, res) => {
//   try {
//     const blog = await Blog.create(req.body);
//     res.status(201).json(blog);
//   } catch (error) {
//     res.status(500).json({ message: "Blog not created" });
//   }
// });

// // GET ALL BLOGS
// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to load blogs" });
//   }
// });

// // UPDATE BLOG
// router.put("/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(blog);
//   } catch (error) {
//     res.status(500).json({ message: "Update failed" });
//   }
// });

// // DELETE BLOG
// router.delete("/:id", async (req, res) => {
//   try {
//     await Blog.findByIdAndDelete(req.params.id);
//     res.json({ success: true });
//   } catch (error) {
//     res.status(500).json({ message: "Delete failed" });
//   }
// });

// module.exports = router;













// const express = require("express");
// const router = express.Router();
// const Blog = require("../models/Blog");

// router.post("/", async (req, res) => {
//   try {
//     console.log("REQ BODY:", req.body); // 🔥 VERY IMPORTANT LOG

//     const { title, content, author } = req.body;

//     if (!title || !content || !author) {
//       console.log("VALIDATION FAILED");
//       return res.status(400).json({ message: "Missing fields" });
//     }

//     const blog = new Blog({
//       title,
//       content,
//       author,
//     });

//     await blog.save();

//     console.log("BLOG SAVED SUCCESSFULLY");
//     res.status(201).json(blog);
//   } catch (error) {
//     console.error("BLOG SAVE ERROR:", error);
//     res.status(500).json({ message: "Blog not submitted" });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (error) {
//     console.error("FETCH ERROR:", error);
//     res.status(500).json({ message: "Fetch failed" });
//   }
// });

// module.exports = router;














// const express = require("express");
// const router = express.Router();
// const Blog = require("../models/Blog");

// // CREATE BLOG
// router.post("/", async (req, res) => {
//   try {
//     const { title, content, author } = req.body;

//     if (!title || !content || !author) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const blog = await Blog.create({ title, content, author });

//     res.status(201).json(blog);
//   } catch (error) {
//     console.error("BLOG ERROR:", error);
//     res.status(500).json({ message: "Blog not submitted" });
//   }
// });

// // GET BLOGS
// router.get("/", async (req, res) => {
//   const blogs = await Blog.find().sort({ createdAt: -1 });
//   res.json(blogs);
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// CREATE
router.post("/", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    console.error("BLOG ERROR:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(blog);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

module.exports = router;
