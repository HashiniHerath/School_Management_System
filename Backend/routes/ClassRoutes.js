const router = require("express").Router();
let Class = require("../models/Class");

//http://localhost:8070/classroom/add
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const section = req.body.section;

    const newClass = new Class({
        name,
        section
    })

    newClass.save().then(()=> {
        res.json("Class Added")
    }).catch((err) => {
        res.status(500).send({status: "Error with creating class", error: err.message});
    })
})

//http://localhost:8070/classroom/add
router.route("/").get((req,res)=>{ 
    Class.find().then((classes)=>{
        res.json(classes)
    }).catch((err)=>{
        res.status(500).send({status: "Error with fetching classes", error: err.message});
    })
})

http://localhost:8070/classroom/update/

router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {srno, classroom} = req.body;

    const updateClass = {
        srno,
        classroom
        
    }
    
    const update = await Class.findByIdAndUpdate(userId, updateClass)
    .then(() => {
    res.status(200).send({status: "User updated"})
    
    }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//http://localhost:8070/class/delete/
router.route("/:id").delete(async (req, res) => {
     let id = req.params.id;

    await Class.findByIdAndDelete(id).then(() => {
        res.status(200).send({status: "classroom deleted"});
    }).catch(() => {
        res.status(500).send({status: "Error with deleting classroom", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    const user = await Class.findById(userId)
        .then(() =>{
            res.status(200).send({status: "User fetched", user: user})
        }).catch(() =>{
            console.log(err.message);
            res.status(500).send({status: "Error with get user", error: err.message});
        })
})

module.exports = router;