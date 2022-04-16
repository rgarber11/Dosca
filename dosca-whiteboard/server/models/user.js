// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// var userSchema = new Schema({
//     code:{
//         type: String,
//         required: true,
//     },
//     url:{
//         type: String,
//         required: true,
//     },
//     username:{
//         type: String,
//         required: true,
//     },
//     color:{
//         type: String,
//         default: "red",
//         required: true,
//     },
    
//     //Permissions
//     can_draw:{
//         type: Boolean,
//         default: true,
//         required: true,
//     },
//     is_banned:{
//         type: Boolean,
//         default: false,
//         required: true,
//     }
// })
// Object.assign(userSchema.methods, require("./user.js"));
// module.exports = mongoose.model("User", userSchema);