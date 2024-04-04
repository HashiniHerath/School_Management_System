const router = require("express").Router();
let ExamTimetable = require("../models/ExamTimetable");

//http://localhost:8070/examTimetable/add
router.route("/add").post((req,res)=>{
    
    const { classroomId, date, startTime, endTime, subjectList } = req.body;

    const newExamTimetable = new ExamTimetable({classroomId, date, startTime, endTime, subjectList})

    newExamTimetable.save().then((result)=> {
        res.json(result)
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Failed to create exam timetable", error: err.message});
    })
})

router.route("/").get(async(req,res)=>{
    
    await ExamTimetable.find().populate(['classroomId', 'subjectList.teacherId', 'subjectList.subjectId'])
    .then((timetables) => {
        res.json(timetables)
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: "Failed to fetch timetables", error: err.message});
    })

})

http://localhost:8070/examtimetable/update/

router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {date, classRoom, subject, startTime, endTime, breakAfter, breakDuration, duration} = req.body;

    const updateExamtimetable = {
        date,
        classRoom,
        subject,
        startTime,
        endTime,
        breakAfter,
        breakDuration,
        duration
    }
    
    const update = await ExamTimetable.findByIdAndUpdate(userId, updateExamtimetable)
    .then(() => {
    res.status(200).send({status: "User updated"})
    
    }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

http://localhost:8070/examtimetable/delete/

router.route("/delete/:id").delete(async (req, res) => {
     let userId = req.params.id;

     await ExamTimetable.findByIdAndDelete(userId)
     .then(() => {
        res.status(200).send({status: "User deleted"});
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
     })
})

router.route("/:id").get(async(req, res) =>{
    let id = req.params.id;
    await ExamTimetable.findById(id).populate(['classroomId', 'subjectList.teacherId' ,'subjectList.subjectId'])
    .then((timetable) => {
        res.status(200).send(timetable)
    }).catch(() =>{
        console.log(err.message);
        res.status(500).send({status: "Failed to fetch timetable", error: err.message});
    })
})

module.exports = router;