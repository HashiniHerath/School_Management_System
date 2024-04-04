import React, { useEffect, useState, } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";



function AllStudentTrns () {

  //retriew students
  const [students, setStudents] = useState([]);
  useEffect(() => {
    function getStudents(){
      axios.get("http://localhost:8070/transportStudent/").then((res) =>{
        setStudents(res.data);
      }).catch((err) => {
        alert(err.message)
      })
    }
    getStudents();
  }, [])

  //Delete Student
  const onDelete = (id) =>{
    axios.delete(`http://localhost:8070/transportStudent/delete/${id}`).then((res) =>{
      setStudents(students.filter(student => student._id !== id));
      alert("Student deleted successfully");
    }).catch((err) => {
      alert(err.message);
    })
  }

  // search Students
  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:8070/transportStudent/").then((res) => {
      if (res.data) {
        const filteredstudents = res.data.filter((student) =>
        student.StudentName.toLowerCase().includes(searchKey)
        );
        setStudents(filteredstudents);
      }
    }).catch((err) => {
      alert(err.message)
    })
  }
  

  return (

    <div className="container-fluid vh-100" style={{backgroundColor:"white"}}>
      
      <p className="h1 m-5 text-center text-dark"> Transport Student LIST </p>

      <div class="row m-3">    
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by student name" aria-label="Search" aria-describedby="search-icon" onChange={handleSearchArea} style={{height: 36}}/>
        <div class="input-group-append" style={{width: 1300}}>
          <span class="input-group-text bg-primary" id="search-icon" style={{height: 38, marginTop: 9}}>
            <i class="bi bi-search" style={{color: 'white'}}></i>
          </span>
        </div>
      </div>
      </div>

      <div class="row m-3" style={{width: 300, paddingLeft: 20}}>
      <Link to="/addTrnsStudent" className="btn btn-secondary" role="button"><i className="bi bi-person-plus-fill"></i>  Add Student</Link>
      </div>
      
      <div class="row m-2">
        <table className="table table-striped table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col" style={{width: 200}}>StudentName</th>
            <th scope="col" style={{width: 400}}>Gradelevel</th>
            <th scope="col" style={{width: 400}}>EmergencContactName</th>
            <th scope="col" style={{width: 400}}>EmergencContactNo</th>
            
            <th scope="col" style={{width: 300}}></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
          <tr key={student.id}>
            <td>{student.StudentName}</td>
            <td>{student.Gradelevel}</td>
            <td>{student.EmergencContactName}</td>
            <td>{student.EmergencContactNo}</td>
            
            <td  style={{textAlign: 'center'}}>
              

              <Link to="#" className="btn btn-danger btn-sm m-1" onClick={(e) => {
                e.preventDefault();
                if (window.confirm("Are you sure you want to delete this student?")) {
                  onDelete(student._id);
                }
              }}><i className="bi bi-trash3-fill"></i>  Delete</Link>

              <Link to={`/UptateStudent/transportStudent/${student._id}`} className="btn btn-primary btn-sm m-1" role="button"><i className="bi bi-pencil-square"></i>  Update</Link>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>

    
  )
  
}

export default AllStudentTrns ;