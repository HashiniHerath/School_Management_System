const express = require('express');
const router=express.Router();
let Student = require("../models/Student");
const jwt = require('jsonwebtoken');
const jwtKey = "madsajidjdaidaaid"


async function generateId() {
    const lastStudent = await Student.findOne().sort({ _id: -1 });
    if (!lastStudent) {
      return "BCC0001";
    }
    const lastId = lastStudent.studentId;
    const numericPart = parseInt(lastId.substring(3));
    const newNumericPart = numericPart + 1;
    const newId = "BCC" + String(newNumericPart).padStart(4, "0");
    return newId;
  }
  
  // Generate a new student ID
  router.get('/generate-id', async (req, res) => {
    try {
      const studentId = await generateId();
      res.status(200).json({ studentId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

//ADD DATA
router.route("/add").post((req,res)=>{

    const studentId = req.body.studentId;
    const fullName = req.body.fullName;
    const gender = req.body.gender ;
    const dob = req.body.dob ;
    const address = req.body.address ;
    const city = req.body.city ;
    const contactHome= req.body.contactHome ;
    const contactCaretaker= req.body.contactCaretaker ;
    const email = req.body.email ;
    const password = req.body.password ;
    const confirmPassword = req.body.confirmPassword ;

    const newStudent = new Student({

        studentId,
        fullName,
        gender,
        dob,
        address,
        city,
        contactHome,
        contactCaretaker,
        email,
        password,
        confirmPassword
    })

    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })
    
})

//READ DATA

router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })

})

//UPDATE DATA

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {studentId,fullName,gender,dob,address,city,contactHome,contactCaretaker,email,password,confirmPassword} = req.body;

    const updateStudent = {
        studentId,
        fullName,
        gender,
        dob,
        address,
        city,
        contactHome,
        contactCaretaker,
        email,
        password,
        confirmPassword
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)
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

    await Student.findByIdAndDelete(userId)
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
    const user = await Student.findById(userId)
    .then((student) => {
        res.status(200).send({status: "User fetched", student});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

// Login
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const student = await Student.findOne({ email, password }).select('-password');
      if (student) {
        jwt.sign({ student }, jwtKey, { expiresIn: '2h' }, (err, token) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error generating token' });
          } else {
            res.status(200).json({ student, auth: token });
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