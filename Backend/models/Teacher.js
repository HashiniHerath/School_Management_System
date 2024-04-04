const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    
    fullName : {
        type : String,
        required: true
    },
    nic : {
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
    contact : {
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
    leaveCount : {
        type : Number,
        required: true
    },

})
const Teacher = mongoose.model("Teacher Detail",teacherSchema);

module.exports = Teacher;
