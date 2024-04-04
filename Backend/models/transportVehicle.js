const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportVehicleSchema = new Schema({
    
    VehicleName : {
        type : String,
        required: true
    },
    VehicleNo : {
        type : String,
        required: true
    },
    AssignedDriver : {
        type : String,
        required: true
    },

})
const transportVehicle = mongoose.model("transportVehicle Detail",transportVehicleSchema);

module.exports = transportVehicle;
