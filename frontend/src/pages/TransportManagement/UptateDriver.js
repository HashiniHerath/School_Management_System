import React, { useState, useEffect } from 'react';
import '../TransportManagement/AddDriverTrns.css';
import axios from 'axios';
import { useParams } from "react-router-dom";


const UptateDriver = () => {
  
    const { id } = useParams();
    const [driver, setDriver] = useState({
        DriverfullName : " ",
        nic : " ",
        LicenseNo : " ",
        gender : " ",
        dob : " ",
        contact : " ",
        email : " ",
        
    });

  useEffect(() => {
    axios.get(`http://localhost:8070/transportDriver/get/${id}`).then((res) =>{
      if(res.data) {
        setDriver({
            DriverfullName : res.data.transportDriver.DriverfullName,
            nic : res.data.transportDriver.nic,
            LicenseNo : res.data.transportDriver.LicenseNo,
            gender : res.data.transportDriver.gender,
            dob : res.data.transportDriver.dob,
            contact : res.data.transportDriver.contact,
            email : res.data.transportDriver.email,
            
        });
      }
    });
  }, [id]);

    const handleInputChange = (e) => {
        const{ name, value } =e.target;

        setDriver ({
            ...driver,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {DriverfullName, nic, LicenseNo, gender, dob, contact,email} = driver;

        if (!nic || !contact || !email ) {
            const errorDiv = document.createElement('div');
            

            alert('Please fill in all fields');
            return;
        }

    const data = {
        DriverfullName : DriverfullName,
        nic : nic,
        LicenseNo : LicenseNo,
        gender : gender,
        dob : dob,
        contact : contact,
        email : email,
        
    };

    axios.put(`http://localhost:8070/transportDriver/update/${id}`, data).then((res) => {
        if(res.data){
            alert(' updated successfully');
            window.location.href = '/AllDriverTrns';
            setDriver({
                DriverfullName : "",
                nic : "",
                LicenseNo : "",
                gender : "",
                dob : "",
                Address : "",
                contact : "",
                email : ""
                
            });

        }
    });
    }

  
  return (
    <div className="container mt-5">
        <form className="form-AddDriverTrns">

        <h1>UPDATE Driver</h1>

        <div className="form-group row" >
            <label for="DriverfullName" className="col-sm-2 col-form-label"> Full Name :</label>
            <div className="col-sm-10" >
            <input type="text" placeholder="Enter full name" className="form-control" id="DriverfullName" value={driver.DriverfullName} name='DriverfullName' onChange={handleInputChange}/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="nic" className="col-sm-2 col-form-label"> NIC :</label>
            <div className="col-sm-10">
            <input type="text" placeholder="Enter NIC" className="form-control" id="nic" value={driver.nic} name='nic' pattern="^\d{11}[vV]|\d{12}$" onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="LicenseNo" className="col-sm-2 col-form-label">License No :</label>
            <div className="col-sm-10">
            <input type="text" placeholder="Enter License No" className="form-control" id="LicenseNo" value={driver.LicenseNo} name='LicenseNo' pattern="^\d{11}[vV]|\d{12}$" onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="gender" className="col-sm-2 col-form-label"> Gender :</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="gender" checked={driver.gender == 'male'} value="male" onClick={handleInputChange} required/>
                <label className="form-check-label" for="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="gender" value="female" checked={driver.gender == 'female'} onClick={handleInputChange} required/>
                <label className="form-check-label" for="female">Female</label>
            </div>
        </div>
        

        <div className="form-group row" >
            <label for="dob" className="col-sm-2 col-form-label"> Date Of Birth :</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="dob" value={driver.dob} name='dob' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="contact" className="col-sm-2 col-form-label"> Contact Number  :</label>
            <div className="col-sm-10">
            <input type="tel" pattern="[7-9]{1}[0-9]{9}"
            title="Phone number with 7-9 and remaing 9 digit with 0-9"  placeholder="Enter contact number" className="form-control" id="contact" value={driver.contact} name='contact' onChange={handleInputChange} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="email" className="col-sm-2 col-form-label"> Email :</label>
            <div className="col-sm-10">
            <input type="email" placeholder="Enter email" className="form-control" id="email" value={driver.email} name='email' onChange={handleInputChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
        </div>
        </div>


        <div style={{textAlign: 'center'}}>
        <button type="sumbit" class="btn btn-primary" onClick={onSubmit}>Update</button>
        </div>
    

      </form>
    </div>
  );
}

export default UptateDriver;