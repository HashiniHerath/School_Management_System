import React, { useState, useEffect } from 'react';
import './styles/styles.AddExam.css';
import axios from 'axios';
import Swal from 'sweetalert2';


function AddExam() {
  
  const [examid, setexamid] = useState ("");
  const [examname, setexamname] = useState ("");
  const [grade, setgrade] = useState ("");
  const [subject, setsubject] = useState ("");
  const [date, setdate] = useState ("");
  const [time, settime] = useState ("");
  const [description, setdescription] = useState ("");

  function sendData(e) {
    e.preventDefault();
    
    const newExam ={
        examid,
        examname,
        grade,
        subject,
        date,
        time,
        description     
    }
    axios.post("http://localhost:8070/exam/add", newExam).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Exam added successfully',
            showConfirmButton: true
          }).then(() => {
            window.location.href = '/examtable';
          });
    }).catch((err) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
    })
    
  }

  
  return (
    <div className="container mt-5">
        <form className="form-AddExam" onSubmit={sendData}>

        <h1>ADD EXAM</h1>

        <div className="form-group row" >
            <label for="examid" className="col-sm-2 col-form-label"> Exam Id :</label>
            <div className="col-sm-10" >
            <input type="text" className="form-control" id="examid" onChange={(e) => {setexamid(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="examname" className="col-sm-2 col-form-label">Exam Name :</label>
            <div className="col-sm-10">
            <input type="text"  className="form-control" id="examname" onChange={(e) => {setexamname(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="grade" className="col-sm-2 col-form-label"> Grade :</label>
            <div className="col-sm-10" >
            <input type="text" className="form-control" id="grade"  onChange={(e) => {setgrade(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="subject" className="col-sm-2 col-form-label"> Subject :</label>
            <div className="col-sm-10" >
            <input type="text" className="form-control" id="subject" onChange={(e) => {setsubject(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="date" className="col-sm-2 col-form-label"> Date :</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="date" onChange={(e) => {setdate(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="time" className="col-sm-2 col-form-label"> Time :</label>
            <div className="col-sm-10" >
            <input type="text" className="form-control" id="time" onChange={(e) => {settime(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="description" className="col-sm-2 col-form-label"> Description :</label>
            <div className="col-sm-10" >
            <input type="text" className="form-control" id="description"onChange={(e) => {setdescription(e.target.value);}} required/>
        </div>
        </div>

        <div style={{textAlign: 'center'}}>
        <button type="sumbit" class="btn btn-primary">ADD</button>
        </div>
      </form>
    </div>
  );
}

export default AddExam;