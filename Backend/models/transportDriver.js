const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportdriverSchema = new Schema({
    
    DriverfullName : {
        type : String,
        required: true
    },
    nic : {
        type : String,
        required: true
    },
    LicenseNo : {
        type : String,
        required: true
    },
    gender : {
        type : String,
        required: true
    },
    dob : {
        type : String,
        required: true
    },

   // age : {
     //   type : String,
       // required: true
   // },
    Address: {
        type: String,
        required: false
      },
    contact : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    

})
const transportDriver = mongoose.model("Driver Detail",transportdriverSchema);

module.exports = transportDriver;
