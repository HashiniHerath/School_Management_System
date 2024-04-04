import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

function QuestionTable () {
  
  //Retrieve details
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    function getQuestions(){
      axios.get("http://localhost:8070/question/").then((res) =>{
        setQuestions(res.data);
      }).catch((err) => {
        alert(err.message)
      })
    }
    getQuestions();
  }, [])

  //Delete Question
  const onDelete = (id) =>{
    axios.delete(`http://localhost:8070/question/delete/${id}`).then((res) =>{
      setQuestions(questions.filter(question => question._id !== id));
      alert("Question deleted successfully");
    }).catch((err) => {
      alert(err.message);
    })
  }

  // search Question
  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:8070/question/").then((res) => {
      if (res.data) {
        const filteredQuestions = res.data.filter((question) =>
          question.examid.toLowerCase().includes(searchKey)
        );
        setQuestions(filteredQuestions);
      }
    }).catch((err) => {
      alert(err.message)
    })
  }
  

  return (

    <div className="container-fluid vw-100" style={{backgroundColor:"white"}}>
      
      <p className="h1 m-5 text-center text-dark"> MANAGE QUESTIONS </p>

      <div class="row m-3">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by exam id" aria-label="Search" aria-describedby="search-icon" onChange={handleSearchArea} style={{height: 36}} />
        <div class="input-group-append" style={{width: 1300}}>
          <span class="input-group-text bg-primary" id="search-icon" style={{height: 38, marginTop: 9}}>
            <i class="bi bi-search" style={{color: 'white'}}></i>
          </span>
        </div>
      </div>
      </div>
      
      <hr style={{backgroundColor: '#535569'}}></hr>

      <div class="row m-3" style={{width: 300, paddingLeft: 20}}>
      <Link to="/addquestion" className="btn btn-secondary" role="button"><i className="bi bi-person-plus-fill"></i>  Add Question</Link>
      </div>
      
      <div class="row m-2">
        <table className="table table-striped table-dark table-bordered" style={{textAlign: 'center'}}>
        <thead>
          <tr>
            <th scope="col-6" style={{width:75}}>Exam ID</th>
            <th scope="col" style={{width:75}}>Question No</th>
            <th scope="col" style={{width:75}}>Question</th>
            <th scope="col" style={{width:75}}>Answer a</th>
            <th scope="col" style={{width:75}}>Answer b</th>
            <th scope="col" style={{width:75}}>Answer c</th>
            <th scope="col" style={{width:75}}>Answer d</th>
            <th style={{width:100}}></th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
          <tr key={question.id}>
            <td>{question.examid}</td>
            <td>{question.questionno}</td>
            <td>{question.question}</td>
            <td>{question.answera}</td>
            <td>{question.answerb}</td>
            <td>{question.answerc}</td>
            <td>{question.answerd}</td>
           
            <td style={{textAlign: 'center'}}>
              
              {/* <Link to={`/profile/question/${question._id}`} className="btn btn-secondary btn-sm m-1" role="button"><i className="bi bi-pencil-square"></i>  Quiz Attempt</Link> */}
              <Link to="#" className="btn btn-danger btn-sm m-1" onClick={(e) => {
                e.preventDefault();
                if (window.confirm("Are you sure you want to delete this question?")) {
                  onDelete(question._id);
                }
              }}><i className="bi bi-trash3-fill"></i>  Delete</Link>
              <Link to={`/updatequestion/question/${question._id}`} className="btn btn-primary btn-sm m-1" role="button"><i className="bi bi-pencil-square"></i>  Update</Link>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>

    
  )
  
}

export default QuestionTable;