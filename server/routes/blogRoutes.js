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



// const express = require("express");
// const router = express.Router();
// const Blog = require("../models/Blog");

// CREATE
// router.post("/", async (req, res) => {
//   try {
//     const blog = await Blog.create(req.body);
//     res.status(201).json(blog);
//   } catch (error) {
//     console.error("BLOG ERROR:", error.message);
//     res.status(400).json({ message: error.message });
//   }
// });


// router.post("/", async (req, res) => {
//   try {
//     const blog = await Blog.create(req.body);

//     return res.status(201).json({
//       success: true,
//       data: blog,
//     });
//   } catch (error) {
//     console.error("BLOG ERROR:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });



// // READ
// router.get("/", async (req, res) => {
//   const blogs = await Blog.find().sort({ createdAt: -1 });
//   res.json(blogs);
// });

// // UPDATE
// router.put("/:id", async (req, res) => {
//   const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(blog);
// });

// // DELETE
// router.delete("/:id", async (req, res) => {
//   await Blog.findByIdAndDelete(req.params.id);
//   res.json({ message: "Blog deleted" });
// });

// module.exports = router;









// const express = require("express");
// const router = express.Router();
// const Blog = require("../models/Blog");

// /**
//  * @route   POST /api/blogs
//  * @desc    Create a new blog
//  */
// router.post("/", async (req, res) => {
//   try {
//     console.log("📥 BLOG CREATE REQUEST:", req.body);

//     const { title, content, author } = req.body;

//     if (!title || !content || !author) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const blog = await Blog.create({
//       title,
//       content,
//       author,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Blog created successfully",
//       data: blog,
//     });
//   } catch (error) {
//     console.error("❌ BLOG CREATE ERROR:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to create blog",
//     });
//   }
// });

// /**
//  * @route   GET /api/blogs
//  * @desc    Get all blogs
//  */
// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });

//     return res.status(200).json({
//       success: true,
//       data: blogs,
//     });
//   } catch (error) {
//     console.error("❌ BLOG FETCH ERROR:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch blogs",
//     });
//   }
// });

// /**
//  * @route   PUT /api/blogs/:id
//  * @desc    Update a blog
//  */
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedBlog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );

//     if (!updatedBlog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Blog updated successfully",
//       data: updatedBlog,
//     });
//   } catch (error) {
//     console.error("❌ BLOG UPDATE ERROR:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to update blog",
//     });
//   }
// });

// /**
//  * @route   DELETE /api/blogs/:id
//  * @desc    Delete a blog
//  */
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

//     if (!deletedBlog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Blog deleted successfully",
//     });
//   } catch (error) {
//     console.error("❌ BLOG DELETE ERROR:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete blog",
//     });
//   }
// });

// module.exports = router;





// const express = require("express");
// const router = express.Router();
// const Blog = require("../models/Blog");

// // CREATE BLOG
// router.post("/", async (req, res) => {
//   try {
//     const blog = await Blog.create(req.body);
//     res.status(201).json({ success: true, data: blog });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// // GET BLOGS
// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: blogs });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Fetch failed" });
//   }
// });

// // UPDATE BLOG
// router.put("/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json({ success: true, data: blog });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

// // DELETE BLOG
// router.delete("/:id", async (req, res) => {
//   try {
//     await Blog.findByIdAndDelete(req.params.id);
//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
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
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const blog = await Blog.create({ title, content, author });

//     res.status(201).json({
//       success: true,
//       data: blog,
//     });
//   } catch (error) {
//     console.error("BLOG CREATE ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: "Blog not saved",
//     });
//   }
// });

// // GET BLOGS
// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });

//     res.json({
//       success: true,
//       data: blogs,
//     });
//   } catch (error) {
//     console.error("FETCH BLOG ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch blogs",
//     });
//   }
// });

// // UPDATE BLOG
// router.put("/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     res.json({
//       success: true,
//       data: blog,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Update failed",
//     });
//   }
// });

// // DELETE BLOG
// router.delete("/:id", async (req, res) => {
//   try {
//     await Blog.findByIdAndDelete(req.params.id);

//     res.json({
//       success: true,
//       message: "Blog deleted",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Delete failed",
//     });
//   }
// });

// module.exports = router;





const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// CREATE
router.post("/", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    console.error("CREATE ERROR ❌", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json({ success: true, data: blogs });
});

// UPDATE
router.put("/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json({ success: true, data: blog });
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
