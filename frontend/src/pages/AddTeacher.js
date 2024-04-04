import React, { useState, useEffect } from 'react';
import '../styles/styles.AddTeacher.css';
import axios from 'axios';


function AddTeacher() {
  
  const [fullName, setfullName] = useState ("");
  const [nic, setnic] = useState ("");
  const [gender, setgender] = useState ("");
  const [dob, setdob] = useState ("");
  const [address, setaddress] = useState ("");
  const [email, setemail] = useState ("");
  const [contact, setcontact] = useState ("");
  const [password, setpassword] = useState ("");
  const [confirmPassword, setconfirmPassword] = useState ("");
  const [leaveCount, setleaveCount] = useState ("");

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
    
    const newTeacher ={
        
        fullName,
        nic,
        gender,
        dob,
        address,
        contact,
        email,
        password,
        confirmPassword,
        leaveCount    


        
    }


    axios.post("http://localhost:8070/teacher/add", newTeacher).then(() => {
        alert('Teacher added successsfully')
        window.location.href = '/add-search-teachers';
    }).catch((err) => {
        alert('Teacher added unsuccesssfully')
    })
    
  }

  
  return (
    <div className="container mt-5">
        <form className="form-AddTeacher" onSubmit={sendData}>

        <h1>ADD TEACHER</h1>

        <div className="form-group row" >
            <label for="fullName" className="col-sm-2 col-form-label"> Full Name :</label>
            <div className="col-sm-10" >
            <input type="text" placeholder="Enter full name" className="form-control" id="fullName" onChange={(e) => {setfullName(e.target.value);}}/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="nic" className="col-sm-2 col-form-label"> NIC :</label>
            <div className="col-sm-10">
            <input type="text" placeholder="Enter NIC" className="form-control" id="nic" pattern="^\d{11}[vV]|\d{12}$" onChange={(e) => {setnic(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="gender" className="col-sm-2 col-form-label"> Gender :</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="gender" value="male" onClick={(e) => setgender(e.target.value)} required/>
                <label className="form-check-label" for="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="gender" value="female" onClick={(e) => setgender(e.target.value)} required/>
                <label className="form-check-label" for="female">Female</label>
            </div>
        </div>
        

        <div className="form-group row" >
            <label for="dob" className="col-sm-2 col-form-label"> Date Of Birth :</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="dob" onChange={(e) => {setdob(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="address" className="col-sm-2 col-form-label"> Address :</label>
            <div className="col-sm-10">
            <input type="text" placeholder="Enter address" className="form-control" id="address" onChange={(e) => {setaddress(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="contact" className="col-sm-2 col-form-label"> Contact Number  :</label>
            <div className="col-sm-10">
            <input type="tel" pattern="[7-9]{1}[0-9]{9}"
            title="Phone number with 7-9 and remaing 9 digit with 0-9"  placeholder="Enter contact number" className="form-control" id="contact" onChange={(e) => {setcontact(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="email" className="col-sm-2 col-form-label"> Email :</label>
            <div className="col-sm-10">
            <input type="email" placeholder="Enter email" className="form-control" id="email"   onChange={(e) => {setemail(e.target.value);}} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
        </div>
        </div>

        <div className="form-group row" >
            <label for="password" className="col-sm-2 col-form-label"> Password :</label>
            <div className="col-sm-10">
            <input type="password" placeholder="Password" className="form-control" id="password" pattern=".{8,20}" onChange={(e) => {setpassword(e.target.value);}} required/>
            <small id="passwordHelpBlock" className="form-text text-muted">
            Your password must be 8-20 characters long.
            </small>
        </div>
        </div>

        <div className="form-group row" >
            <label for="confirmPassword" className="col-sm-2 col-form-label"> ConfirmPassword:</label>
            <div className="col-sm-10">
            <input type="password" placeholder="Confirm Password" className="form-control" id="confirmPassword" onChange={(e) => {setconfirmPassword(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="leaveCount" className="col-sm-2 col-form-label"> Leave Count :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="leaveCount" onChange={(e) => {setleaveCount(e.target.value);}} required/>
        </div>
        </div>


        <div style={{textAlign: 'center'}}>
        <button type="sumbit" class="btn btn-primary">ADD</button>
        </div>
    

      </form>
    </div>
  );
}

export default AddTeacher;