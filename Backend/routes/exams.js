const express = require('express');
const router=express.Router();
let Exam = require("../models/Exam");

//ADD DATA

router.route("/add").post((req,res)=>{

    const examid = req.body.examid;
    const examname = req.body.examname;
    const grade = Number(req.body.grade) ;
    const subject= req.body.subject ;
    const date = req.body.date ;
    const time= req.body.time;
    const description = req.body.description ;
   

    const newExam = new Exam({

        examid,
        examname,
        grade,
        subject,
        date,
        time,
        description,
       
    })

    newExam.save().then(()=>{
        res.json("examAdded")
    }).catch((err)=>{
        console.log(err);
    })
    
})

//READ DATA

router.route("/").get((req,res)=>{

    Exam.find().then((exams)=>{
        res.json(exams)
    }).catch((err)=>{
        console.log(err)
    })

})

//UPDATE DATA

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {examid,examname,grade,subject,date,time,description} = req.body;

    const updateExam = {
        examid,
        examname,
        grade,
        subject,
        date,
        time,
        description,
        
    }

    const update = await Exam.findByIdAndUpdate(userId, updateExam)
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

    await Exam.findByIdAndDelete(userId)
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
    const user = await Exam.findById(userId)
    .then((exam) => {
        res.status(200).send({status: "User fetched", exam});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;