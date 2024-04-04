const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Subject',
        required: true
    }
})

const Teacher = mongoose.model("Teacher",teacherSchema);
module.exports = Teacher;