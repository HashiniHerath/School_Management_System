const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  Club_Name: {
    type: String,
    required: true,
  },
  Teacher_Incharge: {
    type: String,
    required: true,
   
  },

  Description: {
    type: String,
    required: true,
   
  },
  
  Club_President: {
    type: String,
    required: true,
   
  },

  Club_Meeting_Dates: {
    type: Date,
    required: true,
    default:Date.now,
   
  },


});

module.exports = mongoose.model("Club", postSchema);