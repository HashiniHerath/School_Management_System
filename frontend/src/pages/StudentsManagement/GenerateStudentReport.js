import React, { useEffect, useState, } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import 'jspdf-autotable';
import { saveAs } from "file-saver";



function GenerateStudentReport () {

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
    })``
  }
  
  //genarate pdf
const genaratepdf = async (student) => {
  await axios.post(`http://localhost:8070/studentreport/createpdf`, student).then((respnse) => {
    axios.get(`http://localhost:8070/studentreport/fetchpdf`, { responseType: 'blob' }).then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' })
      saveAs(pdfBlob, 'student.pdf')
    })
  })
}


  return (

    <div className="container-fluid vh-100" style={{backgroundColor:"white"}}>
      <p className="h1 m-5 text-center text-dark"> STUDENTS LIST </p>
      

      

      <div class="row m-2">
      
      <div class="input-group mb-3" style={{marginRight: 1600}}>
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-icon" onChange={handleSearchArea} style={{height: 36}}/>
        <div class="input-group-append" style={{width: 1300}}>
          <span class="input-group-text" id="search-icon" style={{height: 38, marginTop: 9}}>
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      </div>

      <hr style={{backgroundColor: '#535569'}}></hr>
      
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
          <tr key={student.id} data-student-id={student.id}>
            <td>{student.studentId}</td>
            <td>{student.fullName}</td>
            <td>{student.contactHome}</td>
            <td>{student.address}</td>
            <td>{student.city}</td>
            <td  style={{textAlign: 'center'}}>
              {/* <button type="sumbit" class="btn btn-primary" onClick={genaratepdf} style={{textAlign: 'right'}}>Generate Report</button> */}
              <Link to="#" className="btn btn-primary  btn-sm m-1" onClick={() => genaratepdf(student)} role="button">Generate Report</Link>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>

    
  )
  
}

export default GenerateStudentReport;