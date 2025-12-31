// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     domain: { type: String, required: true },
//     rating: { type: Number, required: true, min: 1, max: 5 },
//     description: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Review", reviewSchema);


// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     domain: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     rating: {
//       type: Number,
//       required: true,
//       min: 1,
//       max: 5,
//     },

//     description: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 5,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Review", reviewSchema);






// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true, trim: true },
//     domain: { type: String, required: true, trim: true },
//     rating: { type: Number, required: true, min: 1, max: 5 },
//     description: { type: String, required: true, trim: true, minlength: 5 },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Review", reviewSchema);


const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    domain: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    description: { type: String, required: true, trim: true, minlength: 5 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
