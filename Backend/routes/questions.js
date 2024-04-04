const express = require('express');
const router = express.Router();
let Question = require("../models/Question");

//ADD DATA

router.route("/add").post(async (req, res) => {
    const examid = req.body.examid;
    const questionno = Number(req.body.questionno);
    const question = req.body.question;
    const answera = req.body.answera;
    const answerb = req.body.answerb;
    const answerc = req.body.answerc;
    const answerd = req.body.answerd;
    const correctedAnswerIndex = req.body.correctedAnswerIndex;


    const newQuestion = new Question({
        examid,
        questionno,
        question,
        answera,
        answerb,
        answerc,
        answerd,
        correctedAnswerIndex
    })

    return await newQuestion.save().then(() => {
        return res.json("questionAdded")
    }).catch((err) => {
        return res.status(500).json({ err })
    })

})

//READ DATA

router.route("/").get((req, res) => {

    Question.find().then((questions) => {
        res.json(questions)
    }).catch((err) => {
        console.log(err)
    })

})

//UPDATE DATA

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { examid, questionno, question, answera, answerb, answerc, answerd,correctedAnswerIndex } = req.body;

    const updateQuestion = {
        examid,
        questionno,
        question,
        answera,
        answerb,
        answerc,
        answerd,
        correctedAnswerIndex
    }

    const update = await Question.findByIdAndUpdate(userId, updateQuestion)
        .then(() => {
            res.status(200).send({ status: "User updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})

//DELETE DATA

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Question.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "User deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete user", error: err.message });
        })

})

//FETCH DATA

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Question.findById(userId)
        .then((question) => {
            res.status(200).send({ status: "User fetched", question });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        })
})

router.route("/get-quizes/:id").get(async (req, res) => {
    const id = req.params.id;
    console.log("id is " + id)
    const query = {
        examid: id
    };
    return await Question.find(query).then((value) => {
        if (value) {

            return res.status(200).json({ questions: value })
        } else {

            return res.status(404).json({ "message": "questions not found" })
        }
    }).catch(err => {
        return res.status(500).json({ err })
    })
})

module.exports = router;