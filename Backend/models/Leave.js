const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaveSchema = new Schema({
    
    fullName : {
        type : String,
        required: true
    },
    reasonCategory : {
        type : String,
        required: true
    },
    reason : {
        type : String,
        required: true
    },
    dateOfOriginalAppoinment : {
        type : String,
        required: true
    },
    startDateOfTheLeave : {
        type : String,
        required: true
    },
    lastDayOfTheLeave : {
        type : String,
        required: true
    },
    
    noOfLeaveCount : {
        type : Number,
        required: true
    },

})
const Leave = mongoose.model("Leave Detail",leaveSchema);

module.exports = Leave ;