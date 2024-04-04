 //AddDriverTrns

import React, { useState, useEffect } from 'react';
import '../TransportManagement/AddDriverTrns.css';
import axios from 'axios';

function AddDriverTrns() {
  
    
    const [DriverfullName, setDriverfullName] = useState ("");
    const [nic, setnic] = useState ("");
    const [LicenseNo, setLicenseNo] = useState ("");
    const [gender, setGender] = useState ("");
    const [dob, setDateOfBirth] = useState ("");
   // const [age, setage] = useState ("");
    const [Address, setAddress] = useState ("");
    const [contact, setcontact] = useState ("");
    const [email, setEmail] = useState ("");
    
    


    function sendData(e) {
        e.preventDefault();

        
        
        const newdriver ={
        DriverfullName,
        nic,
        LicenseNo,
        gender,
        dob,
      //  age,
        Address,
        contact,
        email       
        }

        axios.post("http://localhost:8070/transportDriver/add", newdriver).then(() => {
            alert('driver added successsfully')
            window.location.href = '/AllDriverTrns';

        }).catch((err) => {
            alert('driver added unsuccesssfully')
        })
    
    }

  
    return (
        <div className="container mt-5">
            <form className="form-AddDriverTrns" onSubmit={sendData}>

            <h1> Add Driver </h1>

            <div className="form-group row" >
                <label for="DriverfullName" className="col-sm-2 col-form-label"> Driver full Name :</label>
                <div className="col-sm-10">
                <input type="text" placeholder="Enter full name" className="form-control" id="DriverfullName" onChange={(e) => {setDriverfullName(e.target.value);}} required/>
            </div>
            </div>

            <div className="form-group row" >
                 <label for="nic" className="col-sm-2 col-form-label"> NIC :</label>
                 <div className="col-sm-10">
                 <input type="text" placeholder="Enter nic number" className="form-control" id="nic" onChange={(e) => {setnic(e.target.value);}} required/>
            </div>
            </div>

            <div className="form-group row">
                 <label htmlFor="LicenseNo" className="col-sm-2 col-form-label">License No:</label>
                 <div className="col-sm-10">
                 <input type="text" placeholder="Enter license number" className="form-control" id="LicenseNo" onChange={(e) => {setLicenseNo(e.target.value);}} required/>
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
                <label for="Address" className="col-sm-2 col-form-label"> Address :</label>
                <div className="col-md-5 mb-3">
                <input type="text" placeholder="Enter driver's address" className="form-control" id="Address" onChange={(e) => {setAddress(e.target.value);}} required/>
                </div>
            </div>


            <div className="form-group row" >
                <label for="contact" className="col-sm-2 col-form-label"> Contact :</label>
                <div className="col-md-4">
                <input type="tel" placeholder="Enter contact number" className="form-control" id="contact" pattern="0[0-9]{9}" onChange={(e) => {setcontact(e.target.value);}} required/>
            </div>
            </div>


            <div className="form-group row" >
                <label for="email" className="col-sm-2 col-form-label"> Email :</label>
                <div className="col-sm-10">
                <input type="email" placeholder="Enter email" className="form-control" id="email" onChange={(e) => {setEmail(e.target.value);}} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
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

export default AddDriverTrns;