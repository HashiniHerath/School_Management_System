//TrnsStudentLeave





import React, { useState, useEffect } from 'react';
import '../TransportManagement/AddDriverTrns.css';
import axios from 'axios';

function TrnsStudentLeave() {
  
    
    const [FullName, setfullName] = useState ("");
    const [ReasonCategory, setReasonCategory] = useState ("");
    const [Reason, setReason] = useState ("");
    const [StartDateOfTheLeave, setStartDateOfTheLeave] = useState ("");
    const [NoOfLeaveCount, setleaveCount] = useState ("");
    
    


    function sendData(e) {
        e.preventDefault();

        const newstudent ={
            FullName,
            ReasonCategory,
            Reason,
            StartDateOfTheLeave,
            NoOfLeaveCount     
        }

        axios.post("http://localhost:8070/TrnsStudentLeave/add", newstudent).then(() => {
            alert('successsfully')
            // window.location.href = '/transportStudentlist';

        }).catch((err) => {
            alert('unsuccesssfully')
        })
    
    }

  
    return (
        <div className="container mt-5">
            <form className="form-TrnsStudentLeave" onSubmit={sendData}>

            <h1> Student Leave Form </h1>

            <div className="form-group row" >
               <label htmlFor="fullName" className="col-sm-2 col-form-label">fullName:</label>
               <div className="col-sm-10">
                <input type="text" placeholder="Enter student name" className="form-control" id="Student Name" onChange={(e) => {setfullName(e.target.value);}} required/>
           </div>
           </div>


           <div className="form-group row">
              <label for="reasonCategory" className="col-sm-2 col-form-label">Reason Category:</label>
              <div className="col-sm-10">
              <select className="form-control" id="reasonCategory" onChange={(e) => {setReasonCategory(e.target.value);}} required>
                   <option value="">Select Reason Category</option>
                   <option value="medical">Medical</option>
                   <option value="family">Family</option>
                   <option value="personal">Personal</option>
                   <option value="other">Other</option>
                    </select>
            </div>
            </div>

            <div className="form-group row">
                 <label htmlFor="Reason" className="col-sm-2 col-form-label">Reason:</label>
                 <div className="col-sm-35">
                 <input type="text" placeholder="Enter reason" className="form-control" id="Reason" onChange={(e) => {setReason(e.target.value);}} required/>
            </div>
            </div>


            <div className="form-group row">
                 <label htmlFor="StartDateOfTheLeave" className="col-sm-2 col-form-label">Start Date of the Leave:</label>
                 <div className="col-sm-10">
                <input type="date" className="form-control" id="StartDateOfTheLeave" onChange={(e) => {setStartDateOfTheLeave(e.target.value);}} required/>
            </div>
            </div>


            <div className="form-group row">
                  <label htmlFor="leaveCount" className="col-sm-2 col-form-label">Leave Count:</label>
                  <div className="col-sm-10">
                  <input type="number" className="form-control" id="leaveCount" onChange={(e) => {setleaveCount(e.target.value);}} required/>
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

export default TrnsStudentLeave;