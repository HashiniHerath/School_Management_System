const express = require('express');
const router=express.Router();
let TrnsStudentLeave = require("../models/TrnsStudentLeave");

//ADD DATA

router.route("/add").post((req,res)=>{

    const FullName = req.body.FullName;
    const ReasonCategory = req.body.ReasonCategory;
    const Reason = req.body.Reason ;
    const StartDateOfTheLeave = req.body.StartDateOfTheLeave ;
    const NoOfLeaveCount = req.body.NoOfLeaveCount ;
    

    const newTrnsStudentLeave = new TrnsStudentLeave({

        FullName,
        ReasonCategory,
        Reason,
        StartDateOfTheLeave,
        NoOfLeaveCount
        
    })

    newTrnsStudentLeave.save().then(()=>{
        res.json("TrnsStudentLeave Added")
    }).catch((err)=>{
        console.log(err);
    })
    
})

//READ DATA

router.route("/").get((req,res)=>{

    TrnsStudentLeave.find().then((TrnsStudentLeave)=>{
        res.json(TrnsStudentLeave)
    }).catch((err)=>{
        console.log(err)
    })

})

//UPDATE DATA

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {fullName,nic,gender,dob,address,contact,email,password,confirmPassword,leaveCount} = req.body;

    const updateTrnsStudentLeave = {
        fullName,
        ReasonCategory,
        Reason,
        StartDateOfTheLeave,
        leaveCount
    }

    const update = await TrnsStudentLeave.findByIdAndUpdate(userId, updateTrnsStudentLeave)
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

    await TrnsStudentLeave.findByIdAndDelete(userId)
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
    const user = await TrnsStudentLeave.findById(userId)
    .then((TrnsStudentLeave) => {
        res.status(200).send({status: "User fetched", TrnsStudentLeave});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;