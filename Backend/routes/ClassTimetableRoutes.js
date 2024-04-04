const router = require("express").Router();
let ClassTimetable = require("../models/ClassTimetable");

//http://localhost:8070/classtimetable/add
router.route("/add").post((req,res)=>{
    
    const { classroom, date } = req.body;
    const subjects = [
        { teacher: null, subject: null },
        { teacher: null, subject: null },
        { teacher: null, subject: null },
        { teacher: null, subject: null },
        { teacher: null, subject: null },
        { teacher: null, subject: null },
        { teacher: null, subject: null },
        { teacher: null, subject: null },
        { teacher: null, subject: null }
    ]
    
    const newClassTimetable = new ClassTimetable({
        classroom,
        subjects,
        date
    })

    newClassTimetable.save().then((result)=> {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "Error with creating class", error: err.message});
    })
})

router.route("/").get((req,res)=>{
    ClassTimetable.find().populate({ path: 'classroom', select: ['name', 'section'] }).then((classTimetables)=>{
        res.json(classTimetables)
    }).catch((err)=>{
        console.log(err)
    })

})

//http://localhost:8070/classtimetable/
router.route("/").put(async(req, res) => {
    const {timetableId, subjects} = req.body;
    
    await ClassTimetable.findByIdAndUpdate({ _id: timetableId }, { subjects: subjects }).then((result) => {
        res.status(200).send({status: "Time table updated", data: result});
    }).catch((err) => {
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

http://localhost:8070/classtimetable/delete/

router.route("/delete/:id").delete(async (req, res) => {
     let userId = req.params.id;

     await Classtimetable.findByIdAndDelete(userId)
     .then(() => {
        res.status(200).send({status: "User deleted"});
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
     })
})

router.route("/:id").get(async (req, res) => {
    const id = req.params.id

    await ClassTimetable.findById(id).populate({ path: 'classroom', select: ['name', 'section'] })
    .then((classTimetable) => {
        res.status(200).send(classTimetable)
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "Error with getting timetable", error: err.message});
    })
})

module.exports = router;