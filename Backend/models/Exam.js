const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const examSchema = new Schema({
    
    examid : {
        type : String,
        required: true
    },
    examname : {
        type : String,
        required: true
    },
    grade : {
        type : Number,
        required: true
    },
    subject : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    time : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    

})
const Exam = mongoose.model("Exam Detail",examSchema);

module.exports = Exam;
