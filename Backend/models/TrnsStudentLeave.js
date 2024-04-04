const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TrnsStudentLeaveSchema = new Schema({
    
    FullName : {
        type : String,
        required: true
    },
    ReasonCategory : {
        type : String,
        required: true
    },
    Reason : {
        type : String,
        required: true
    },
    StartDateOfTheLeave : {
        type : String,
        required: true
    },
    
    NoOfLeaveCount : {
        type : String,
        required: true
    },
    
    
    

})
const TrnsStudentLeave = mongoose.model("TrnsStudentLeave Detail",TrnsStudentLeaveSchema);

module.exports = TrnsStudentLeave;
