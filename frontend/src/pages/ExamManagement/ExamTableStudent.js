//ExamTableStudent
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

function ExamTableStudent () {
  
  //Retrieve details
  const [exams, setExams] = useState([]);
  useEffect(() => {
    function getExams(){
      axios.get("http://localhost:8070/exam/").then((res) =>{
        setExams(res.data);
      }).catch((err) => {
        alert(err.message)
      })
    }
    getExams();
  }, [])

  //Delete Exam
  const onDelete = (id) =>{
    axios.delete(`http://localhost:8070/exam/delete/${id}`).then((res) =>{
      setExams(exams.filter(exam => exam._id !== id));
      alert("Exam deleted successfully");
    }).catch((err) => {
      alert(err.message);
    })
  }

  // search Exam
  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:8070/exam/").then((res) => {
      if (res.data) {
        const filteredExams = res.data.filter((exam) =>
          exam.subject.toLowerCase().includes(searchKey) ||
          exam.grade.toString().includes(searchKey)
        );
        setExams(filteredExams);
      }
    }).catch((err) => {
      alert(err.message)
    })
  }
  

  return (

    <div className="container-fluid vw-100">
      

      <div class="row m-3">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by grade or subject" aria-label="Search" aria-describedby="search-icon" onChange={handleSearchArea} />
        <div class="input-group-append" style={{width: 1300}}>
          <span class="input-group-text bg-primary" id="search-icon">
            <i class="bi bi-search" style={{color: 'white'}}></i>
          </span>
        </div>
      </div>
      </div>
      
      <hr style={{backgroundColor: 'white'}}></hr>
      <p className="h1 m-5 text-center text-light">  ATTEMPT QUIZES </p>
      
      <div class="row m-2">
        <table className="table table-striped table-dark table-bordered" style={{textAlign: 'center'}}>
        <thead>
          <tr>
            <th scope="col-6" style={{width:75}}>Exam ID</th>
            <th scope="col" style={{width:75}}>Exam Name</th>
            <th scope="col" style={{width:75}}>Grade</th>
            <th scope="col" style={{width:75}}>Subject</th>
            <th scope="col" style={{width:75}}>Date</th>
            <th scope="col" style={{width:75}}>Time</th>
            <th scope="col" style={{width:75}}>Description</th>
            <th style={{width:100}}></th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
          <tr key={exam.id}>
            <td>{exam.examid}</td>
            <td>{exam.examname}</td>
            <td>{exam.grade}</td>
            <td>{exam.subject}</td>
            <td>{exam.date}</td>
            <td>{exam. time}</td>
            <td>{exam.description}</td>
            <td style={{textAlign: 'center'}}>
              
            <Link to={`/attemptQuiz/${exam.examid}`} className="btn btn-secondary btn-sm m-1" role="button"><i className="bi bi-pencil-square"></i>  Quiz Attempt</Link>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>

    
  )
  
}


export default ExamTableStudent;