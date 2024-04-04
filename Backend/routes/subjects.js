const router = require("express").Router();
let Subject = require("../models/Subject");

//http://localhost:8070/subject/add
router.route("/add").post((req,res)=>{
    const subject = req.body.subject;

    const newSubject = new Subject({
        name: subject,     
    })

    newSubject.save().then(()=> {
        res.json("Subject Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    
    Subject.find().then((subjects)=>{
        res.json(subjects)
    }).catch((err)=>{
        console.log(err)
    })

})

http://localhost:8070/subject/update/
router.route("/").put(async(req, res) => {
    const { objId, updatedSubject } = req.body
    
    await Subject.findByIdAndUpdate({ _id: objId }, { name: updatedSubject }).then(() => {
        res.status(200).send({status: "subject updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

http://localhost:8070/subject/
router.route("/:id").delete(async (req, res) => {
    let id = req.params.id;

    await Subject.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "Subject deleted"});
    }).catch((err) => {
        res.status(500).send({status: "Error with deleting subject", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    const user = await Subject.findById(userId)
        .then(() =>{
            res.status(200).send({status: "User fetched", user: user})
        }).catch(() =>{
            console.log(err.message);
            res.status(500).send({status: "Error with get user", error: err.message});
        })
})

module.exports = router;