const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    
    EmailAdd : {
        type : String,
        required: true
        
    },
    Password: {
        type : String,
        required: true
    },
   

})
const admin = mongoose.model("admin details",adminSchema);

module.exports = admin ;