const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examTimetableSchema = new Schema({
    date : {
        type : String,
        required: true
    },

    classroomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Class',
        required: true
    },

    startTime : {
        type : String,
        required: true
    },

    endTime: {
        type: String,
        required: true
    },

    subjectList: [{
        subjectId: { type: mongoose.Schema.Types.ObjectId,ref : 'Subject'},
        startTime: { type: String, default: '' },
        endTime: { type: String, default: '' },
        teacherId: { type: mongoose.Schema.Types.ObjectId,ref : 'Teacher'},
    }]
})

const ExamTimetable = mongoose.model("ExamTimetable",examTimetableSchema);
module.exports = ExamTimetable;