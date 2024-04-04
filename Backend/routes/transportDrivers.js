const express = require('express');
const router=express.Router();
let transportDriver = require("../models/transportDriver");

//ADD DATA

router.route("/add").post((req,res)=>{

    const DriverfullName = req.body.DriverfullName;
    const nic = req.body.nic;
    const LicenseNo  = req.body.LicenseNo ;
    const gender = req.body.gender ;
    const dob = req.body.dob ;
    //const age = req.body.age ;
    const Address = req.body.address ;
    const contact= req.body.contact ;
    const email = req.body.email ;
    
    

    const newtransportDriver = new transportDriver({

        DriverfullName,
        nic,
        LicenseNo,
        gender,
        dob,
       // age,
        Address,
        contact,
        email
    })

    newtransportDriver.save().then(()=>{
        res.json("transportDriver Added")
    }).catch((err)=>{
        console.log(err);
    })
    
})

//READ DATA

router.route("/").get((req,res)=>{

    transportDriver.find().then((transportDrivers)=>{
        res.json(transportDrivers)
    }).catch((err)=>{
        console.log(err)
    })

})

//UPDATE DATA

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {DriverfullName,nic,LicenseNo,gender,dob,Address,contact,email} = req.body;

    const updatetransportDriver = {
        DriverfullName,
        nic,
        LicenseNo,
        gender,
        dob,
       // age,
        Address,
        contact,
        email
    }

    const update = await transportDriver.findByIdAndUpdate(userId, updatetransportDriver)
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

    await transportDriver.findByIdAndDelete(userId)
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
    const user = await transportDriver.findById(userId)
    .then((transportDriver) => {
        res.status(200).send({status: "User fetched", transportDriver});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;