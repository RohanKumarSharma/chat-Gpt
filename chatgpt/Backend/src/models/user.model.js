// // const mongoose = require("mongoose");

// // const userSchema = new mongoose.Schema(
// //   {
// //     email: { type: String, required: true, unique: true },
// //     fullName: {
// //       firstName: { type: String, required: true },
// //       lastName: { type: String, required: true },
// //     },
// //     password: { type: String },
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const userModel = mongoose.model("User", userSchema);

// // module.exports = userModel;


// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//     },
//     fullName: {
//       firstName: {
//         type: String,
//         required: true,
//         trim: true,
//       },
//       lastName: {
//         type: String,
//         required: true,
//         trim: true,
//       },
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const userModel = mongoose.model("User", userSchema);

// module.exports = userModel;



const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
    }
},
    {
        timestamps: true
    }
)

const userModel = mongoose.model("user", userSchema)


module.exports = userModel