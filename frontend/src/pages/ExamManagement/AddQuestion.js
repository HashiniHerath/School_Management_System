import React, { useState, useEffect } from 'react';
import './styles/styles.AddQuestion.css';
import axios from 'axios';
import Swal from 'sweetalert2';


function AddQuestion() {

    const [examid, setexamid] = useState([]);
    const [questionno, setquestionno] = useState("");
    const [question, setquestion] = useState("");
    const [answera, setanswera] = useState("");
    const [answerb, setanswerb] = useState("");
    const [answerc, setanswerc] = useState("");
    const [answerd, setanswerd] = useState("");
    const [correctedAnswerIndex, setCorrectAnswerIndex] = useState("")
    const [selectedExamId, setSelectedExamId] = useState("")


    function sendData(e) {
        e.preventDefault();

        const newQuestion = {
            "examid": selectedExamId,
            questionno,
            question,
            answera,
            answerb,
            answerc,
            answerd,
            correctedAnswerIndex
        }

        axios.post("http://localhost:8070/question/add", newQuestion).then(() => {
            alert('question added successsfully')
            setquestion("")
            setanswera("")
            setanswerb("")
            setanswerc("")
            setanswerd("")
            setanswera("")
            window.location = '/Questionteacher';
        }).catch((err) => {
            alert('question added unsuccesssfully')
        })

    }

    useEffect(() => {
        axios.get('http://localhost:8070/exam')
            .then(response => {
                setexamid(response.data);
            })
            .catch(error => {
                console.error(`There was an error retrieving the exam list: ${error}`);
            });
    }, [])


    return (
        <div className="container mt-5">
            <form className="form-AddQuestion" onSubmit={sendData}>

                <h1>ADD QUESTION</h1>


                <div className="form-group row">
                    <label htmlFor="examid" className="col-sm-2 col-form-label">Exam ID:</label>
                    <div className="col-sm-10">
                        <select className="form-control" id="examid" onChange={(e) => { setSelectedExamId(e.target.value); }} required>
                            {
                                examid && examid.map((exam, index) => {
                                    return <option value={exam._id} key={index}>{exam.examname}</option>
                                })
                            }

                        </select>
                    </div>
                </div>

                <div className="form-group row" >
                    <label for="question" className="col-sm-2 col-form-label">Question:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="question" onChange={(e) => { setquestion(e.target.value); }} required />
                    </div>
                </div>

                <div className="form-group row" >
                    <label for="answera" className="col-sm-2 col-form-label">answer a:</label>
                    <div className="col-sm-10" >
                        <input type="text" className="form-control" id="answera" onChange={(e) => { setanswera(e.target.value); }} required />
                    </div>
                </div>

                <div className="form-group row" >
                    <label for="answerb" className="col-sm-2 col-form-label"> answer b :</label>
                    <div className="col-sm-10" >
                        <input type="text" className="form-control" id="answerb" onChange={(e) => { setanswerb(e.target.value); }} required />
                    </div>
                </div>

                <div className="form-group row" >
                    <label for="answerc" className="col-sm-2 col-form-label"> answer c :</label>
                    <div className="col-sm-10">
                        <input type="answerc" className="form-control" id="answerc" onChange={(e) => { setanswerc(e.target.value); }} required />
                    </div>
                </div>

                <div className="form-group row" >
                    <label for="answerd " className="col-sm-2 col-form-label"> answer d  :</label>
                    <div className="col-sm-10" >
                        <input type="text" className="form-control" id="time" onChange={(e) => { setanswerd(e.target.value); }} required />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="examid" className="col-sm-2 col-form-label">Correct Question Index</label>
                    <div className="col-sm-10">
                        <select className="form-control" id="examid" onChange={(e) => { setCorrectAnswerIndex(e.target.value); }} required>
                            <option value="1">A</option>
                            <option value="2">B</option>
                            <option value="3">C</option>
                            <option value="4">D</option>
                        </select>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button type="sumbit" class="btn btn-primary">ADD</button>
                </div>
            </form >
        </div >
    );
}

export default AddQuestion;