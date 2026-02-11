// // const mongoose = require('mongoose');



// // const chatSchema = new mongoose.Schema({
// //     user: {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: 'user', // ye batata hai ki jo type mai id store horaha hai wo konse collection se belong krta hai bss yhi bata hai
// //         require: true
// //     },
// //     title: {
// //         type: String,
// //         require: true
// //     },
// //     lastActivity: {
// //         type: Date,
// //         default: Date.now
// //     }
// // },   {
// //     timestamps: true
// // })

// // const chatModel = mongoose.model("chat",chatSchema);

// // module.exports = chatModel;


// const mongoose = require("mongoose");

// const chatSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",        // must match user model name
//       required: true,     // ✅ correct spelling
//     },
//     title: {
//       type: String,
//       required: true,     // ✅ correct spelling
//       trim: true,
//     },
//     lastActivity: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const chatModel = mongoose.model("Chat", chatSchema);

// module.exports = chatModel;


const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    lastActivity: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

const chatModel = mongoose.model("chat", chatSchema)


module.exports = chatModel;