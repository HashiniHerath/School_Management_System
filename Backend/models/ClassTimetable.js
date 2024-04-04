const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classTimetableSchema = new Schema({
    date : {
        type : String,
        required: true
    },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Class',
        required: true
    },
    subjects: [{
        teacher: { type: String, default: ''},
        subject: { type: String, default: ''}
    }]
})

const ClassTimetable = mongoose.model("ClassTimetable",classTimetableSchema);
module.exports = ClassTimetable;