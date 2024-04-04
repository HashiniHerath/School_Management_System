const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    
    studentId : {
        type : String,
        required: true
    },
    fullName : {
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
    address : {
        type : String,
        required: true
    },
    city : {
        type : String,
        required: true
    },
    contactHome : {
        type : String,
        required: true
    },
    contactCaretaker : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    confirmPassword : {
        type : String,
        required: true
    },
    

})
const Student = mongoose.model("Student Detail",studentSchema);

module.exports = Student;
