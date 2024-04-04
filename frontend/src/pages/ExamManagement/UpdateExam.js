import React, { useState, useEffect } from 'react';
import './styles/styles.AddExam.css';
import axios from 'axios';
import { Navigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateExam = () => {
  
    const { id } = useParams();
    const [exam, setExam] = useState({
        examid : " ",
        examname : " ",
        grade : " ",
        subject : " ",
        date : " ",
        time : " ",
        description : " ",
    });

  useEffect(() => {
    axios.get(`http://localhost:8070/exam/get/${id}`).then((res) =>{
      if(res.data) {
        setExam({
            examid : res.data.exam.examid,
            examname : res.data.exam.examname,
            grade : res.data.exam.grade,
            subject : res.data.exam.subject,
            date : res.data.exam.date,
            time : res.data.exam.time,
            description : res.data.exam.description
        });
        
      }
    });
  }, [id]);

    const handleInputChange = (e) => {
        const{ name, value } =e.target;

        setExam ({
            ...exam,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {examid, examname, grade, subject, date, time, description} = exam;

        if (!date || !subject || !time) {
            alert('Please fill in all fields');
            return;
        }

    const data = {
        examid : examid,
        examname : examname,
        grade : grade,
        subject : subject,
        date : date,
        time : time,
        description : description
    };

    axios.put(`http://localhost:8070/exam/update/${id}`, data).then((res) => {

    if(res.data){
        Swal.fire({
            icon: 'success',
            title: 'Exam updated successfully',
            showConfirmButton: true
          }).then(() => {
            window.location.href = '/examtable';
          });
            setExam({
                examid : "",
                examname : "",
                grade : "",
                subject : "",
                date : "",
                time : "",
                description : ""
            });

        }
    });
    }

  
  return (
    <div className="container mt-5">
        <form className="form-AddExam">

        <h1>UPDATE EXAM</h1>

        <div className="form-group row" >
            <label for="examid" className="col-sm-2 col-form-label"> Exam ID :</label>
            <div className="col-sm-10" >
            <input type="text" placeholder="Enter Exam ID" className="form-control" id="examid" value={exam.examid} name='examid' onChange={handleInputChange}/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="examname" className="col-sm-2 col-form-label"> examname :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="examname" value={exam.examname} name='examname' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="grade" className="col-sm-2 col-form-label"> Grade :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="grade" value={exam.grade} name='grade' onChange={handleInputChange} required/>
        </div>
        </div>
        <div className="form-group row" >
            <label for="subject" className="col-sm-2 col-form-label"> Subject :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="subject" value={exam.subject} name='subject' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="date" className="col-sm-2 col-form-label"> Date :</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="date" value={exam.date} name='date' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="time" className="col-sm-2 col-form-label"> Time :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="time" value={exam.time} name='time' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="description" className="col-sm-2 col-form-label"> description :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="description" value={exam.description} name='description' onChange={handleInputChange} required/>
        </div>
        </div>


        <div style={{textAlign: 'center'}}>
        <button type="sumbit" class="btn btn-primary" onClick={onSubmit}>Update</button>
        </div>
    

      </form>
    </div>
  );
}

export default UpdateExam;