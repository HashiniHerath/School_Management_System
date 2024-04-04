const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noticeSchema = new Schema({
    grade: {
        type: String,
        required: true
    },
    clznotice: {
        type: String,
        required: true
    }
    
},{timestamps: true})

module.exports = mongoose.model('Classnotice', noticeSchema)


