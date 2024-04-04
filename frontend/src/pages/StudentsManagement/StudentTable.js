import React, { useEffect, useState, } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import 'jspdf-autotable';
import { saveAs } from "file-saver";
import Swal from 'sweetalert2';

function StudentTable () {

  //retriew students
  const [students, setStudents] = useState([]);
  useEffect(() => {
    function getStudents(){
      axios.get("http://localhost:8070/student/").then((res) =>{
        setStudents(res.data);
      }).catch((err) => {
        alert(err.message)
      })
    }
    getStudents();
  }, [])

  //Delete Student
  const onDelete = (id) =>{
    axios.delete(`http://localhost:8070/student/delete/${id}`).then((res) =>{
      setStudents(students.filter(student => student._id !== id));
    }).catch((err) => {
    })
  }

  // search students
  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:8070/student/").then((res) => {
      if (res.data) {
        const filteredStudents = res.data.filter((student) =>
          student.fullName.toLowerCase().includes(searchKey) ||
          student.studentId.toString().includes(searchKey)
        );
        setStudents(filteredStudents);
      }
    }).catch((err) => {
      alert(err.message)
    })
  }
  
  //genarate pdf
  const genaratepdf=async()=>{

    await  axios.post(`http://localhost:8070/allstudentreport/createpdf`,students).then((respnse)=>{
         axios.get(`http://localhost:8070/allstudentreport/fetchpdf`,{responseType:'blob'}).then((res)=>{
  
         const pdfBlob=new Blob([res.data],{type:'application/pdf'})
         saveAs(pdfBlob,'student.pdf')
  
         })
    })
  }

  return (

    <div className="container-fluid vh-100" style={{backgroundColor:"white"}}>
      <p className="h1 m-5 text-center text-dark"> STUDENTS LIST </p>
      

      

      <div class="row m-2">
      
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-icon" onChange={handleSearchArea} />
        <div class="input-group-append" style={{width: 1300}}>
          <span class="input-group-text" id="search-icon" style={{height: 35, marginTop: 9}}>
            <i class="fas fa-search" ></i>
          </span>
        </div>
      </div>

      <hr style={{backgroundColor: '#535569'}}></hr>

      <button type="sumbit" class="btn btn-primary" onClick={genaratepdf} style={{marginLeft: 10, marginBottom: 10, width: 200}}>Generate Report</button>
      </div>
      
      <div class="row m-2">
        <table className="table table-striped table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col" style={{width: 200}}>Student ID</th>
            <th scope="col" style={{width: 400}}>Student Name</th>
            <th scope="col" style={{width: 400}}>Student contact</th>
            <th scope="col" style={{width: 400}}>Student Adddress</th>
            <th scope="col" style={{width: 400}}>city</th>
            <th scope="col" style={{width: 300}}></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
          <tr key={student.id}>
            <td>{student.studentId}</td>
            <td>{student.fullName}</td>
            <td>{student.contactHome}</td>
            <td>{student.address}</td>
            <td>{student.city}</td>
            <td  style={{textAlign: 'center'}}>
              <Link to={`/Adminprofile/student/${student._id}`} className="btn btn-secondary btn-sm m-1" role="button"><i className="bi bi-eye-fill"></i> view</Link>

              <Link to="#" className="btn btn-danger btn-sm m-1" onClick={(e) => {
                e.preventDefault();
                Swal.fire({
                  title: 'Are you sure?',
                  text: 'You won\'t be able to revert this!',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#dc3545',
                  cancelButtonColor: '#6c757d',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    onDelete(student._id);
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })
              }}>
                <i className="bi bi-trash3-fill"></i>  Delete
              </Link>

              <Link to={`/updatestudent/student/${student._id}`} className="btn btn-primary btn-sm m-1" role="button"><i className="bi bi-pencil-square"></i>  Update</Link>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>

    
  )
  
}

export default StudentTable;