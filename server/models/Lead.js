// const mongoose = require("mongoose");

// const leadSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//       minlength: 2,
//     },

//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       lowercase: true,
//       trim: true,
//       match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
//     },

//     service: {
//       type: String,
//       required: [true, "Service is required"],
//       trim: true,
//     },

//     message: {
//       type: String,
//       trim: true,
//       minlength: 5,
//     },

//     status: {
//       type: String,
//       enum: ["new", "contacted", "in-progress", "completed"],
//       default: "new",
//     },
//   },
  
// );



// module.exports = mongoose.model("Lead", leadSchema);











































// const mongoose = require("mongoose");

// const leadSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//       trim: true,
//       minlength: 2,
//     },

//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       lowercase: true,
//       trim: true,
//       match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
//     },

//     service: {
//       type: String,
//       required: [true, "Service is required"],
//       trim: true,
//     },

//     projectDetails: {
//       type: String,
//       required: [true, "Project details are required"],
//       trim: true,
//       minlength: 5,
//     },

//     status: {
//       type: String,
//       enum: ["new", "contacted", "in-progress", "completed"],
//       default: "new",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Lead", leadSchema);





// const mongoose = require("mongoose");

// const leadSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       lowercase: true,
//       trim: true,
//     },

//     service: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     message: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//   },
//   {
//     timestamps: true, // ✅ THIS FIXES DATE ISSUE
//   }
// );

// module.exports = mongoose.model("Lead", leadSchema);



















// const mongoose = require("mongoose");

// const leadSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 2,
//     },

//     email: {
//       type: String,
//       required: true,
//       trim: true,
//       lowercase: true,
//     },

//     service: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     message: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 5,
//     },

//     emailSent: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Lead", leadSchema);



const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    service: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    emailSent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
