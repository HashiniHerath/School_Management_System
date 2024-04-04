const router = require("express").Router();
let Teacher = require("../models/TeacherJ");

http://localhost:8070/teacher/add
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const subject = req.body.subject;

    const newTeacher = new Teacher({
        name,
        subject,
    })

    newTeacher.save().then(()=> {
        res.json("Teacher Added")
    }).catch((err)=>{
        res.status(500).send({status: "Error with adding teacher", error: err.message});
    })
})

router.route("/").get((req,res)=>{
    Teacher.find().populate({ path: 'subject', select: ['name'] })
    .then((teacher) => {
        res.json(teacher)
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "Error with fetching teachers", error: err.message});
    })
})

//http://localhost:8070/teacher/
router.route("/").put(async(req, res) => {
    const { objId, updatedName } = req.body

    await Teacher.findByIdAndUpdate({ _id: objId }, { name: updatedName }).then(() => {
        res.status(200).send({status: "Teacher updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating teacher", error: err.message});
    })
})

http://localhost:8070/teacher/
router.route("/:id").delete(async (req, res) => {
     let id = req.params.id;

    await Teacher.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Teacher deleted"});
    }).catch((err) => {
        res.status(500).send({status: "Error with deleting teacher", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    const user = await Teacher.findById(userId)
        .then(() =>{
            res.status(200).send({status: "User fetched", user: user})
        }).catch(() =>{
            console.log(err.message);
            res.status(500).send({status: "Error with get user", error: err.message});
        })
})

module.exports = router;