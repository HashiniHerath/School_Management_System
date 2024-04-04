import React, { useState, useEffect } from 'react';
import './styles/styles.StudentRegisteration.css';
import axios from 'axios';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';


const StudentUpdate = () => {

    const { id } = useParams();
    const [student, setStudent] = useState({
        studentId : "",
        fullName : "",
        gender : "",
        dob : "",
        address : "",
        city : "",
        contactHome : "",
        contactCaretaker : "",
        email : "",
        password : "",
        confirmPassword : "",
    });

  useEffect(() => {
    axios.get(`http://localhost:8070/student/get/${id}`).then((res) =>{
      if(res.data) {
        setStudent({
            studentId : res.data.student.studentId,
            fullName : res.data.student.fullName,
            gender : res.data.student.gender,
            dob : res.data.student.dob,
            address : res.data.student.address,
            city : res.data.student.city,
            contactHome : res.data.student.contactHome,
            contactCaretaker : res.data.student.contactCaretaker,
            email : res.data.student.email,
            password : res.data.student.password,
            confirmPassword : res.data.student.confirmPassword,
        });
      }
    });
  }, [id]);

    const handleInputChange = (e) => {
        const{ name, value } =e.target;

        setStudent ({
            ...student,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {studentId,  fullName, gender, dob, address, city, contactHome, contactCaretaker, email, password, confirmPassword} = student;

        if (!studentId || !fullName || !contactHome) {
            alert('Please fill in all fields');
            return;
        }

    const data = {
        studentId : studentId,
        fullName : fullName,
        gender : gender,
        dob : dob,
        address : address,
        city : city,
        contactHome : contactHome,
        contactCaretaker : contactCaretaker,
        email : email,
        password : password,
        confirmPassword : confirmPassword,
    };

    axios.put(`http://localhost:8070/student/update/${id}`, data).then((res) => {
        if(res.data){
            Swal.fire({
                icon: 'success',
                title: 'Student update successfully',
                showConfirmButton: false,
                timer: 1500
              });
            setStudent({
                studentId : "",
                fullName : "",
                gender : "",
                dob : "",
                address : "",
                city : "",
                contactHome : "",
                contactCaretaker : "",
                email : "",
                password : "",
                confirmPassword : ""
            });
            window.location.href = '/studentlist';

        }
    });
    }

  
  return (
    <div className="container mt-5">
        <form className="form-StudentRegisteration">

        <h1>Update Student - {student.studentId}</h1>

        <div className="form-group row" >
            <label for="studentId" className="col-sm-2 col-form-label"> Student Id :</label>
            <div className="col-sm-10" >
            <input type="text" className="form-control" id="studentId" name="studentId" value={student.studentId} onChange= {handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="fullName" className="col-sm-2 col-form-label"> Full Name :</label>
            <div className="col-sm-10">
            <input type="text" placeholder="Enter full name" className="form-control" id="fullName" name="fullName" value={student.fullName} onChange= {handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="gender" className="col-sm-2 col-form-label"> Gender :</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="gender" value="male" checked={student.gender == "male"} onChange= {handleInputChange} required/>
                <label className="form-check-label" for="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="gender" value="female" checked={student.gender == "female"} onChange= {handleInputChange} required/>
                <label className="form-check-label" for="female">Female</label>
            </div>
        </div>

        <div className="form-group row" >
            <label for="dob" className="col-sm-2 col-form-label"> Date Of Birth :</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="dob" name="dob" value={student.dob} onChange= {handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="address" className="col-sm-2 col-form-label"> Address :</label>
            <div className="col-md-5 mb-3">
            <input type="text" placeholder="Enter address" className="form-control" id="address" name="address" value={student.address} onChange= {handleInputChange} required/>
        </div>
        <label for="city" className="col-sm-2 col-form-label"> City :</label>
            <div className="col-md-3 mb-3">
            <input type="text" placeholder="Enter city" className="form-control" id="city" name="city" value={student.city} onChange= {handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="contactHome" className="col-sm-2 col-form-label"> Contact [Home]  :</label>
            <div className="col-md-4">
            <input type="tel" placeholder="Enter contact number [Home]" className="form-control" id="contactHome" name="contactHome" value={student.contactHome} onChange= {handleInputChange} required/>
        </div>
        <label for="contactCaretaker" className="col-sm-2 col-form-label"> [The Caretaker] :</label>
            <div className="col-md-4">
            <input type="tel" placeholder="Enter contact number [The Caretaker]" className="form-control" id="contactCaretaker" name="contactCaretaker" value={student.contactCaretaker} onChange= {handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="email" className="col-sm-2 col-form-label"> Email :</label>
            <div className="col-sm-10">
            <input type="email" placeholder="Enter email" className="form-control" id="email" name="email" value={student.email} onChange= {handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="password" className="col-sm-2 col-form-label"> Password :</label>
            <div className="col-sm-10">
            <input type="password" placeholder="Password" className="form-control" id="password" name="password" value={student.password} onChange= {handleInputChange} required/>
            <small id="passwordHelpBlock" className="form-text text-muted">
            Your password must be 8-20 characters long.
            </small>
        </div>
        </div>

        <div className="form-group row" >
            <label for="confirmPassword" className="col-sm-2 col-form-label"> Confirm Password :</label>
            <div className="col-sm-10">
            <input type="password" placeholder="Confirm Password" className="form-control" id="confirmPassword" name="confirmPassword" value={student.confirmPassword} onChange= {handleInputChange} required/>
        </div>
        </div>

        <div style={{textAlign: 'center'}}>
                <button type="submit" onClick={onSubmit} className="btn btn-primary">
                Update
                </button>
            </div>
        
      </form>
    </div>
  );
};

export default StudentUpdate;