const express = require('express');
const router=express.Router();
let Leave = require("../models/Leave");

//ADD DATA

router.route("/add").post((req,res)=>{

    const fullName = req.body.fullName;
    const reasonCategory = req.body.reasonCategory ;
    const reason = req.body.reason ;
    const dateOfOriginalAppoinment = req.body.dateOfOriginalAppoinment ;
    const startDateOfTheLeave= req.body.startDateOfTheLeave ;
    const lastDayOfTheLeave = req.body.lastDayOfTheLeave ;
    const noOfLeaveCount = req.body.noOfLeaveCount ;

    const newLeave = new Leave({

        fullName,
        reasonCategory,
        reason,
        dateOfOriginalAppoinment,
        startDateOfTheLeave,
        lastDayOfTheLeave,
        noOfLeaveCount
    })

    newLeave.save().then(()=>{
        res.json("Leave Deatils Added")
    }).catch((err)=>{
        console.log(err);
    })
    
})

//READ DATA

router.route("/").get((req,res)=>{

    Leave.find().then((leaves)=>{
        res.json(leaves)
    }).catch((err)=>{
        console.log(err)
    })

})

//UPDATE DATA

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {fullName,reasonCategory,reason,dateOfOriginalAppoinment,startDateOfTheLeave,lastDayOfTheLeave,noOfLeaveCount} = req.body;

    const updateLeave = {
        fullName,
        reasonCategory,
        reason,
        dateOfOriginalAppoinment,
        startDateOfTheLeave,
        lastDayOfTheLeave,
        noOfLeaveCount
    }

    const update = await Leave.findByIdAndUpdate(userId, updateLeave)
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

    await Leave.findByIdAndDelete(userId)
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
    const user = await Leave.findById(userId)
    .then((leave) => {
        res.status(200).send({status: "User fetched", leave});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;