const express = require('express');
const router=express.Router();
let Teacher = require("../models/Teacher");
const jwt = require('jsonwebtoken');
const jwtKey = "madsajidjdaidaaid"

//ADD DATA

router.route("/add").post((req,res)=>{

    const fullName = req.body.fullName;
    const nic = req.body.nic;
    const gender = req.body.gender ;
    const dob = req.body.dob ;
    const address = req.body.address ;
    const contact= req.body.contact ;
    const email = req.body.email ;
    const password = req.body.password ;
    const confirmPassword = req.body.confirmPassword ;
    const leaveCount = Number(req.body.leaveCount) ;

    const newTeacher = new Teacher({

        fullName,
        nic,
        gender,
        dob,
        address,
        contact,
        email,
        password,
        confirmPassword,
        leaveCount
    })

    newTeacher.save().then(()=>{
        res.json("Teacher Added")
    }).catch((err)=>{
        console.log(err);
    })
    
})

//READ DATA

router.route("/").get((req,res)=>{

    Teacher.find().then((teachers)=>{
        res.json(teachers)
    }).catch((err)=>{
        console.log(err)
    })

})

//UPDATE DATA

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {fullName,nic,gender,dob,address,contact,email,password,confirmPassword,leaveCount} = req.body;

    const updateTeacher = {
        fullName,
        nic,
        gender,
        dob,
        address,
        contact,
        email,
        password,
        confirmPassword,
        leaveCount
    }

    const update = await Teacher.findByIdAndUpdate(userId, updateTeacher)
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

    await Teacher.findByIdAndDelete(userId)
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
    const user = await Teacher.findById(userId)
    .then((teacher) => {
        res.status(200).send({status: "User fetched", teacher});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

// Login
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const teacher = await Teacher.findOne({ email:email, password:password });
      if (teacher) {
        jwt.sign({ teacher }, jwtKey, { expiresIn: '2h' }, (err, token) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error generating token' });
          } else {
            res.status(200).json({ teacher, auth: token });
          }
        });
      } else {
        res.status(404).json({ message: 'Invalid email or password' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;