const express = require('express');
const router=express.Router();
let transportVehicle = require("../models/transportVehicle");

//ADD DATA

router.route("/add").post((req,res)=>{

    const VehicleName = req.body.VehicleName;
    const VehicleNo = req.body.VehicleNo;
    const AssignedDriver = req.body.AssignedDriver ;
    

    const newtransportVehicle = new transportVehicle({

        VehicleName,
        VehicleNo,
        AssignedDriver
    })

    newtransportVehicle.save().then(()=>{
        res.json("transportVehicle Added")
    }).catch((err)=>{
        console.log(err);
    })
    
})

//READ DATA

router.route("/").get((req,res)=>{

    transportVehicle.find().then((transportVehicles)=>{
        res.json(transportVehicles)
    }).catch((err)=>{
        console.log(err)
    })

})

//UPDATE DATA

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {VechicleName,VechicleNo,AssignedDriver} = req.body;

    const updatetransportVehicle = {
        VechicleName,
        VechicleNo,
        AssignedDriver
        
    }

    const update = await transportVehicle.findByIdAndUpdate(userId, updatetransportVehicle)
    .then(() =>{
        res.status(200).send({status: "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//DELETE DATA

router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await transportVehicle.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })

})

//FETCH DATA

router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;
    const user = await transportVehicle.findById(userId)
    .then((transportVehicle) => {
        res.status(200).send({status: "User fetched", transportVehicle});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;