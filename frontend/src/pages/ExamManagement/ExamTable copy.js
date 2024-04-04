import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

function ExamTable () {
  
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
          exam.examid.toLowerCase().includes(searchKey)
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
      {/* <div class="input-group">
          <div class="form-outline">
            <input id="search-input" type="search" class="form-control" placeholder="Search" />
          </div>
          <button id="search-button" type="button" class="btn btn-primary btn-sm">
          <i class="bi bi-search"></i>
          </button>
      </div> */}
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by exam id" aria-label="Search" aria-describedby="search-icon" onChange={handleSearchArea} />
        <div class="input-group-append" style={{width: 1300}}>
          <span class="input-group-text bg-primary" id="search-icon">
            <i class="bi bi-search" style={{color: 'white'}}></i>
          </span>
        </div>
      </div>
      </div>
      
      <hr style={{backgroundColor: 'white'}}></hr>
      <p className="h1 m-5 text-center text-dark"> MANAGE EXAMS </p>

      <div class="row m-3">
      <Link to="/addexam" className="btn btn-secondary" role="button"><i className="bi bi-person-plus-fill"></i>  Add Exam</Link>
      </div>
      
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
              
              {/* <Link to={`/profile/exam/${exam._id}`} className="btn btn-secondary btn-sm m-1" role="button"><i className="bi bi-pencil-square"></i>  Quiz Attempt</Link> */}
              <Link to="#" className="btn btn-danger btn-sm m-1" onClick={(e) => {
                e.preventDefault();
                if (window.confirm("Are you sure you want to delete this exam?")) {
                  onDelete(exam._id);
                }
              }}><i className="bi bi-trash3-fill"></i>  Delete</Link>
              <Link to={`/updateexam/exam/${exam._id}`} className="btn btn-primary btn-sm m-1" role="button"><i className="bi bi-pencil-square"></i>  Update</Link>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>

    
  )
  
}

export default ExamTable;