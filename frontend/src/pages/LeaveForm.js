import React, { useState, useEffect } from 'react';
import '../styles/styles.LeaveForm.css';
import axios from 'axios';


function LeaveForm() {
  
  const [fullName, setfullName] = useState ("");
  const [reasonCategory, setreasonCategory] = useState ("");
  const [reason, setreason] = useState ("");
  const [dateOfOriginalAppoinment, setdateOfOriginalAppoinment] = useState ("");
  const [startDateOfTheLeave, setstartDateOfTheLeave] = useState ("");
  const [lastDayOfTheLeave, setlastDayOfTheLeave] = useState ("");
  const [noOfLeaveCount, setnoOfLeaveCount] = useState ("");

  function sendData(e) {
    e.preventDefault();
    
    const newLeave ={
        
        fullName,
        reasonCategory,
        reason,
        dateOfOriginalAppoinment,
        startDateOfTheLeave,
        lastDayOfTheLeave,
        noOfLeaveCount
    }


    axios.post("http://localhost:8070/leave/add", newLeave).then(() => {
        alert('Leave Details added successsfully')
    }).catch((err) => {
        alert('Leave Details added unsuccesssfully')
    })
    
  }

  
  return (
    <div className="container mt-5">
        <form className="form-LeaveForm" onSubmit={sendData}>

        <h1>LEAVE FORM</h1>

        <div className="form-group row" >
            <label for="fullName" className="col-sm-2 col-form-label"> Full Name :</label>
            <div className="col-sm-10" >
            <input type="text" placeholder="Enter full name" className="form-control" id="fullName" onChange={(e) => {setfullName(e.target.value);}}/>
        </div>
        </div>
        <div className="form-group row" >
            <label for="reasonCategory" className="col-sm-2 col-form-label"> Reason Category :</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="reasonCategory" value="personal" onClick={(e) => setreasonCategory(e.target.value)} required/>
                <label className="form-check-label" for="personal">Personal</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="reasonCategory" value="medical" onClick={(e) => setreasonCategory(e.target.value)} required/>
                <label className="form-check-label" for="medical">Medical</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="reasonCategory" value="formal" onClick={(e) => setreasonCategory(e.target.value)} required/>
                <label className="form-check-label" for="formal">Formal</label>
            </div>
        </div>
        

        <div className="form-group row" >
            <label for="reason" className="col-sm-2 col-form-label"> Reason :</label>
            <div className="col-sm-10">
            <input type="reason" placeholder="Explain reason" className="form-control" id="reason" onChange={(e) => {setreason(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="dateOfOriginalAppoinment" className="col-sm-2 col-form-label"> Date Of Original Appoinment :</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="dateOfOriginalAppoinment" onChange={(e) => {setdateOfOriginalAppoinment(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="startDateOfTheLeave" className="col-sm-2 col-form-label"> Start Date Of The Leave :</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="startDateOfTheLeave" onChange={(e) => {setstartDateOfTheLeave(e.target.value);}} required/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="lastDayOfTheLeave" className="col-sm-2 col-form-label"> Last Day Of The Leave :</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="lastDayOfTheLeave" onChange={(e) => {setlastDayOfTheLeave(e.target.value);}} required/>
        </div>
        </div>

        

        <div className="form-group row" >
            <label for="noOfLeaveCount" className="col-sm-2 col-form-label"> No Of Leave Count :</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="noOfLeaveCount" onChange={(e) => {setnoOfLeaveCount(e.target.value);}} required/>
        </div>
        </div>


        <div style={{textAlign: 'center'}}>
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    

      </form>
    </div>
  );
}

export default LeaveForm;