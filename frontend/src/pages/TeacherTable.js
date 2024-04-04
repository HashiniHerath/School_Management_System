import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

function TeacherTable () {
  
  //Retrieve details
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    function getTeachers(){
      axios.get("http://localhost:8070/teacher/").then((res) =>{
        setTeachers(res.data);
      }).catch((err) => {
        alert(err.message)
      })
    }
    getTeachers();
  }, [])

  //Delete Teacher
  const onDelete = (id) =>{
    axios.delete(`http://localhost:8070/teacher/delete/${id}`).then((res) =>{
      setTeachers(teachers.filter(teacher => teacher._id !== id));
      alert("Teacher deleted successfully");
    }).catch((err) => {
      alert(err.message);
    })
  }

  // search Teacher
  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:8070/teacher/").then((res) => {
      if (res.data) {
        const filteredTeachers = res.data.filter((teacher) =>
          teacher.fullName.toLowerCase().includes(searchKey) ||
          teacher.nic.toString().includes(searchKey)
        );
        setTeachers(filteredTeachers);
      }
    }).catch((err) => {
      alert(err.message)
    })
  }
 

  return (

    <div className="container-fluid">
      
      <p className="h1 m-5 text-center text-dark"> MANAGE TEACHERS </p>

      <div class="row m-3">    
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by teacher name" aria-label="Search" aria-describedby="search-icon" onChange={handleSearchArea} style={{height: 36}}/>
        <div class="input-group-append" style={{width: 1300}}>
          <span class="input-group-text bg-primary" id="search-icon">
            <i class="bi bi-search" style={{color: 'white'}}></i>
          </span>
        </div>
      </div>
      </div>

      <hr style={{backgroundColor: '#535569'}}></hr>

      <div class="row m-3">
      <Link to="/addteacher" className="btn btn-secondary" role="button"><i className="bi bi-person-plus-fill"></i>  Add Teacher</Link>
      </div>

      <div class="row m-2" style={{padding: 30}}>
        <table className="table table-striped table-dark table-bordered" style={{textAlign: 'center'}}>
        <thead>
          <tr>
            <th scope="col-6" style={{width:400}}>Teacheer Name</th>
            <th scope="col" style={{width:400}}>Contact Number</th>
            <th scope="col" style={{width:400}}>Leave Count</th>
            <th scope="col" style={{width:400}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
          <tr key={teacher.id}>
            <td>{teacher.fullName}</td>
            <td>{teacher.contact}</td>
            <td>{teacher.leaveCount}</td>
            <td style={{textAlign: 'center'}}>
              
              <Link to={`/profile/teacher/${teacher._id}`} className="btn btn-secondary btn-sm m-1" role="button"><i className="bi bi-eye-fill"></i>  View</Link>
              <Link to="#" className="btn btn-danger btn-sm m-1" onClick={(e) => {
                e.preventDefault();
                if (window.confirm("Are you sure you want to delete this teacher?")) {
                  onDelete(teacher._id);
                }
              }}><i className="bi bi-trash3-fill"></i>  Delete</Link>
              <Link to={`/updateteacher/teacher/${teacher._id}`} className="btn btn-primary btn-sm m-1" role="button"><i className="bi bi-pencil-square"></i>  Update</Link>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>

    
  )
  
}

export default TeacherTable;