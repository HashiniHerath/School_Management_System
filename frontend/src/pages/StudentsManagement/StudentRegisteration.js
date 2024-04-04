import React, { useState, useEffect } from 'react';
import './styles/styles.StudentRegisteration.css';
import axios from 'axios';
import Swal from 'sweetalert2'

function StudentRegisteration() {
  
    const [studentId, setstudentId] = useState ("");
    const [fullName, setFullName] = useState ("");
    const [gender, setGender] = useState ("");
    const [dob, setDateOfBirth] = useState ("");
    const [address, setAddress] = useState ("");
    const [city, setCity] = useState ("");
    const [email, setEmail] = useState ("");
    const [contactHome, setContactHome] = useState ("");
    const [contactCaretaker, setContactCaretaker] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState ("");

    useEffect(() => {
        axios.get("http://localhost:8070/student/generate-id").then((res) => {
          setstudentId(res.data.studentId);
        });
      }, []);


    function sendData(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('invalid-feedback');
            errorDiv.innerText = 'Passwords do not match.';
            const confirmPasswordInput = document.getElementById('confirmPassword');
            confirmPasswordInput.classList.add('is-invalid');
            confirmPasswordInput.parentNode.appendChild(errorDiv);
            return;
        }
        
        const newStudent ={
            studentId,
            fullName,
            gender,
            dob,
            address,
            city,
            email,
            contactHome,
            contactCaretaker,
            password,
            confirmPassword        
        }

        axios.post("http://localhost:8070/student/add", newStudent).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Student added successfully',
                showConfirmButton: true
              }).then(() => {
                window.location.href = '/studentlist';
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
            <form className="form-StudentRegisteration" onSubmit={sendData}>

            <h1>Student Registration</h1>

            <div className="form-group row" >
                <label for="studentId" className="col-sm-2 col-form-label"> Student Id :</label>
                <div className="col-sm-10" >
                <input
              type="text"
              className="form-control"
              id="studentId"
              value={studentId}
              disabled
              required
            />
            </div>
            </div>

            <div className="form-group row" >
                <label for="fullName" className="col-sm-2 col-form-label"> Full Name :</label>
                <div className="col-sm-10">
                <input type="text" placeholder="Enter full name" className="form-control" id="fullName" onChange={(e) => {setFullName(e.target.value);}} required/>
            </div>
            </div>

            <div className="form-group row" >
                <label for="gender" className="col-sm-2 col-form-label"> Gender :</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="gender" value="male" onClick={(e) => setGender(e.target.value)} required/>
                    <label className="form-check-label" for="male">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="gender" value="female" onClick={(e) => setGender(e.target.value)} required/>
                    <label className="form-check-label" for="female">Female</label>
                </div>
            </div>

            <div className="form-group row" >
                <label for="dob" className="col-sm-2 col-form-label"> Date Of Birth :</label>
                <div className="col-sm-10">
                <input type="date" className="form-control" id="dob" onChange={(e) => {setDateOfBirth(e.target.value);}} required/>
            </div>
            </div>

            <div className="form-group row" >
                <label for="address" className="col-sm-2 col-form-label"> Address :</label>
                <div className="col-md-5 mb-3">
                <input type="text" placeholder="Enter address" className="form-control" id="address" onChange={(e) => {setAddress(e.target.value);}} required/>
            </div>
            <label for="city" className="col-sm-2 col-form-label"> City :</label>
                <div className="col-md-3 mb-3">
                <input type="text" placeholder="Enter city" className="form-control" id="city" onChange={(e) => {setCity(e.target.value);}} required/>
            </div>
            </div>
            <div className="form-group row" >
                <label for="contactHome" className="col-sm-2 col-form-label"> Contact [Home]  :</label>
                <div className="col-md-4">
                <input type="tel" placeholder="Enter contact number [Home]" className="form-control" id="contactHome" pattern="0[0-9]{9}" onChange={(e) => {setContactHome(e.target.value);}} required/>
            </div>
            <label for="contactCaretaker" className="col-sm-2 col-form-label"> [The Caretaker] :</label>
                <div className="col-md-4">
                <input type="tel" placeholder="Enter contact number [The Caretaker]" className="form-control" id="contactCaretaker" pattern="0[0-9]{9}" onChange={(e) => {setContactCaretaker(e.target.value);}} required/>
            </div>
            </div>

            <div className="form-group row" >
                <label for="email" className="col-sm-2 col-form-label"> Email :</label>
                <div className="col-sm-10">
                <input type="email" placeholder="Enter email" className="form-control" id="email" onChange={(e) => {setEmail(e.target.value);}} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
            </div>
            </div>

            <div className="form-group row" >
                <label for="password" className="col-sm-2 col-form-label"> Password :</label>
                <div className="col-sm-10">
                <input type="password" placeholder="Password" className="form-control" id="password" onChange={(e) => {setPassword(e.target.value);}} pattern=".{8,20}" required/>
                <small id="passwordHelpBlock" className="form-text text-muted">
                Your password must be 8-20 characters long.
                </small>
            </div>
            </div>

            <div className="form-group row" >
                <label for="confirmPassword" className="col-sm-2 col-form-label"> Confirm Password :</label>
                <div className="col-sm-10">
                <input type="password" placeholder="Confirm Password" className="form-control" id="confirmPassword" onChange={(e) => {setConfirmPassword(e.target.value);}} required/>
            </div>
            </div>
            <div style={{textAlign: 'center'}}>
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </div>
            
            
        </form>
        </div>
    );
    }

export default StudentRegisteration;