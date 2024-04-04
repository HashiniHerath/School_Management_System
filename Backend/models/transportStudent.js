const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportStudentSchema = new Schema({
    
    StudentName : {
        type : String,
        required: true
    },
    Gradelevel : {
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
    
    EmergencContactName : {
        type : String,
        required: true
    },
    EmergencContactNo : {
        type : String,
        required: true
    },
    Address: {
        type: String,
        required: false
      },
    ParentEmail : {
        type : String,
        required: true
    },
    
    

})
const transportStudent = mongoose.model("transportStudent Detail",transportStudentSchema);

module.exports = transportStudent;
