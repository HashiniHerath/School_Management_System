import React, { useState, useEffect } from 'react';
import '../TeachersManagement/styles/styles.AddTeacher.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const UpdateTeacher = () => {
  
    const { id } = useParams();
    const [teacher, setTeacher] = useState({
        fullName : " ",
        nic : " ",
        gender : " ",
        dob : " ",
        address : " ",
        contact : " ",
        email : " ",
        password : " ",
        confirmPassword : " ",
        leaveCount : " ",
    });

  useEffect(() => {
    axios.get(`http://localhost:8070/teacher/get/${id}`).then((res) =>{
      if(res.data) {
        setTeacher({
            fullName : res.data.teacher.fullName,
            nic : res.data.teacher.nic,
            gender : res.data.teacher.gender,
            dob : res.data.teacher.dob,
            address : res.data.teacher.address,
            contact : res.data.teacher.contact,
            email : res.data.teacher.email,
            password : res.data.teacher.password,
            confirmPassword : res.data.teacher.confirmPassword,
            leaveCount : res.data.teacher.leaveCount
        });
      }
    });
  }, [id]);

    const handleInputChange = (e) => {
        const{ name, value } =e.target;

        setTeacher ({
            ...teacher,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {fullName, nic, gender, dob, address, contact, email, password, confirmPassword, leaveCount} = teacher;

        if (!leaveCount || !fullName || !nic  ) {
            const errorDiv = document.createElement('div');
            

            alert('Please fill in all fields');
            return;
        }
        else if (password !== confirmPassword) {
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('invalid-feedback');
            errorDiv.innerText = 'Passwords do not match.';
            const confirmPasswordInput = document.getElementById('confirmPassword');
            confirmPasswordInput.classList.add('is-invalid');
            confirmPasswordInput.parentNode.appendChild(errorDiv);
            return;
          }

    const data = {
        fullName : fullName,
        nic : nic,
        gender : gender,
        dob : dob,
        address : address,
        contact : contact,
        email : email,
        password : password,
        confirmPassword : confirmPassword,
        leaveCount : leaveCount
    };

    axios.put(`http://localhost:8070/teacher/update/${id}`, data).then((res) => {
        if(res.data){
            Swal.fire({
                icon: 'success',
                title: 'Teacher updated successfully',
                showConfirmButton: true
              }).then(() => {
                window.location.href = '/add-search-teachers';
              });
            setTeacher({
                fullName : "",
                nic : "",
                gender : "",
                address : "",
                address : "",
                contact : "",
                email : "",
                password : "",
                confirmPassword : "",
                leaveCount : ""
            });

        }
    });
    }

  
  return (
    <div className="container mt-5">
        <form className="form-AddTeacher">

        <h1>UPDATE TEACHER</h1>

        <div className="form-group row" >
            <label for="fullName" className="col-sm-2 col-form-label"> Full Name :</label>
            <div className="col-sm-10" >
            <input type="text" placeholder="Enter full name" className="form-control" id="fullName" value={teacher.fullName} name='fullName' onChange={handleInputChange}/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="nic" className="col-sm-2 col-form-label"> NIC :</label>
            <div className="col-sm-10">
            <input type="text" placeholder="Enter NIC" className="form-control" id="nic" value={teacher.nic} name='nic' pattern="^\d{11}[vV]|\d{12}$" onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="gender" className="col-sm-2 col-form-label"> Gender :</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="gender" checked={teacher.gender == 'male'} value="male" onClick={handleInputChange} required/>
                <label className="form-check-label" for="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="gender" value="female" checked={teacher.gender == 'female'} onClick={handleInputChange} required/>
                <label className="form-check-label" for="female">Female</label>
            </div>
        </div>
        

        <div className="form-group row" >
            <label for="dob" className="col-sm-2 col-form-label"> Date Of Birth :</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="dob" value={teacher.dob} name='dob' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="address" className="col-sm-2 col-form-label"> Address :</label>
            <div className="col-sm-10">
            <input type="text" placeholder="Enter address" className="form-control" id="address" value={teacher.address} name='address' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="contact" className="col-sm-2 col-form-label"> Contact Number  :</label>
            <div className="col-sm-10">
            <input type="tel" pattern="[7-9]{1}[0-9]{9}"
            title="Phone number with 7-9 and remaing 9 digit with 0-9"  placeholder="Enter contact number" className="form-control" id="contact" value={teacher.contact} name='contact' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="email" className="col-sm-2 col-form-label"> Email :</label>
            <div className="col-sm-10">
            <input type="email" placeholder="Enter email" className="form-control" id="email" value={teacher.email} name='email' onChange={handleInputChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="password" className="col-sm-2 col-form-label"> Password :</label>
            <div className="col-sm-10">
            <input type="password" placeholder="Password" className="form-control" id="password" value={teacher.password} name='password' pattern=".{8,20}" onChange={handleInputChange} required/>
            <small id="passwordHelpBlock" className="form-text text-muted">
            Your password must be 8-20 characters long.
            </small>
        </div>
        </div>

        <div className="form-group row" >
            <label for="confirmPassword" className="col-sm-2 col-form-label"> ConfirmPassword:</label>
            <div className="col-sm-10">
            <input type="password" placeholder="Confirm Password" className="form-control" id="confirmPassword" value={teacher.confirmPassword} name='confirmPassword' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row">
            <label htmlFor="leaveCount" className="col-sm-2 col-form-label">
                Leave Count:
            </label>
            <div className="col-sm-10">
                <input
                type="text"
                className="form-control"
                id="leaveCount"
                value={teacher.leaveCount}
                name="leaveCount"
                onChange={(e) => {
                    const value = e.target.value;
                    if (value <= 45) {
                    handleInputChange(e);
                    } else {
                    alert("Leave count cannot be more than 45.");
                    }
                }}
                required
                />
        </div>
        </div>

        {/* <div className="form-group row" >
            <label for="leaveCount" className="col-sm-2 col-form-label"> Leave Count :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="leaveCount" value={teacher.leaveCount} name='leaveCount' onChange={handleInputChange} required/>
        </div>
        </div> */}


        <div style={{textAlign: 'center'}}>
        <button type="sumbit" class="btn btn-primary" onClick={onSubmit}>Update</button>
        </div>
    

      </form>
    </div>
  );
}

export default UpdateTeacher;