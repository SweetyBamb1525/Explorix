// const mongoose = require("mongoose");

// const blogSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Blog title is required"],
//       trim: true,
//       minlength: 3,
//     },

//     content: {
//       type: String,
//       required: [true, "Blog content is required"],
//       minlength: 10,
//     },

//     author: {
//       type: String,
//       required: [true, "Author name is required"],
//       trim: true,
//     },
//   },
//   {
//     timestamps: true, // adds createdAt & updatedAt automatically
//   }
// );

// module.exports = mongoose.model("Blog", blogSchema);

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
