const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    examid : {
        type : String,
      required:true
    },
    questionno : {
        type : Number,
        required: true
    },
    question : {
        type : String,
        required: true
    },
    answera : {
        type : String,
        required: true
    },
    answerb : {
        type : String,
        required: true
    },
    answerc: {
        type : String,
        required: true
    },
    answerd: {
        type : String,
        required: true
    },
    correctedAnswerIndex: {
        type : String,
        required: true
    },
  
    

})
const Question = mongoose.model("Question Detail",questionSchema);

module.exports = Question;
