const express = require('express');
const router=express.Router();
let transportStudent = require("../models/transportStudent");

//ADD DATA

router.route("/add").post((req,res)=>{

    const StudentName = req.body.StudentName;
    const Gradelevel = req.body.Gradelevel;
    const gender = req.body.gender ;
    const dob = req.body.dob ;
    const EmergencContactName = req.body.EmergencContactName ;
    const EmergencContactNo = req.body.EmergencContactNo ;
    const address = req.body.address ;
    const ParentEmail = req.body.ParentEmail ;
    

    const newtransportStudent = new transportStudent({

        StudentName,
        Gradelevel,
        gender,
        dob,
        EmergencContactName,
        EmergencContactNo,
        address,
        ParentEmail,
        
    })

    newtransportStudent.save().then(()=>{
        res.json("transportStudent Added")
    }).catch((err)=>{
        console.log(err);
    })
    
})

//READ DATA

router.route("/").get((req,res)=>{

    transportStudent.find().then((transportStudent)=>{
        res.json(transportStudent)
    }).catch((err)=>{
        console.log(err)
    })

})

//UPDATE DATA

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {StudentName,Gradelevel,gender,dob,EmergencContactName,EmergencContactNo,address,ParentEmail} = req.body;

    const updatetransportStudent = {
        StudentName,
        Gradelevel,
        gender,
        dob,
        EmergencContactName,
        EmergencContactNo,
        address,
        ParentEmail,
    }

    const update = await transportStudent.findByIdAndUpdate(userId, updatetransportStudent)
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

    await transportStudent.findByIdAndDelete(userId)
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
    const user = await transportStudent.findById(userId)
    .then((transportStudent) => {
        res.status(200).send({status: "User fetched", transportStudent});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;