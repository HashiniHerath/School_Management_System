import React, { useState, useEffect } from 'react';
import './styles/styles.AddQuestion.css';
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";

const UpdateQuestion = () => {
  
    const { id } = useParams();
    const [questions, setquestion] = useState({
       examid : " ",
       questionno : " ",
       question : " ",
       answera : " ",
       answerb : " ",
       answerc : " ",
       answerd: " ",
    });

  useEffect(() => {
    axios.get(`http://localhost:8070/question/get/${id}`).then((res) =>{
      if(res.data) {
        setquestion({
           examid : res.data.question.examid,
           questionno : res.data.question.questionno,
           question : res.data.question.question,
           answera : res.data.question.answera,
           answerb : res.data.question.answerb,
           answerc : res.data.question.answerc,
           answerd : res.data.question.answerd 
        });
        
      }
    });
  }, [id]);

    const handleInputChange = (e) => {
        const{ name, value } =e.target;

        setquestion ({
            ...questions,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {examid,questionno,question, answera,answerb,answerc,answerd} = questions;

        if (!answerb || !answera || !answerc) {
            alert('Please fill in all fields');
            return;
        }

    const data = {
       examid :examid,
       questionno :questionno,
       question :question,
       answera : answera,
       answerb :answerb,
       answerc :answerc,
       answerd : answerd
    };

    axios.put(`http://localhost:8070/question/update/${id}`, data).then((res) => {

        if(res.data){
            alert('questions updated successfully');
            window.location = '/Questionteacher';
           
            setquestion({
               examid : "",
               questionno : "",
               question : "",
               answera : "",
               answerb : "",
               answerc : "",
               answerd : ""
            });

        }
    });
    }

  
  return (
    <div className="container mt-5">
        <form className="form-AddQuestion">

        <h1>UPDATE QUESTION</h1>

        <div className="form-group row" >
            <label for="examid" className="col-sm-2 col-form-label"> exam id :</label>
            <div className="col-sm-10" >
            <input type="text" placeholder="Enter examid" className="form-control" id="examid" value={questions.examid} name='examid' onChange={handleInputChange}/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="questionno" className="col-sm-2 col-form-label">question no :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="questionno" value={questions.questionno} name='questionno' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="question" className="col-sm-2 col-form-label">question :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="question" value={questions.question} name='question' onChange={handleInputChange} required/>
        </div>
        </div>
        <div className="form-group row" >
            <label for="answera" className="col-sm-2 col-form-label"> answera :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="answera" value={questions.answera} name='answera' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="answerb" className="col-sm-2 col-form-label">answerb :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="answerb" value={questions.answerb} name='answerb' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="answerc" className="col-sm-2 col-form-label">answerc :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="answerc" value={questions.answerc} name='answerc' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="answerd" className="col-sm-2 col-form-label"> answerd :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="answerd" value={questions.answerd} name='answerd' onChange={handleInputChange} required/>
        </div>
        </div>


        <div style={{textAlign: 'center'}}>
        <button type="sumbit" class="btn btn-primary" onClick={onSubmit}>Update</button>
        </div>
    

      </form>
    </div>
  );
}

export default UpdateQuestion;