//AddStudentTrns



 import React, { useState, useEffect } from 'react';
 import '../TransportManagement/AddDriverTrns.css';
 import axios from 'axios';
 
 function AddStudentTrns() {
   
     
     const [StudentName, setStudentName] = useState ("");
     const [Gradelevel, setGradelevel] = useState ("");
     const [EmergencContactName, setEmergencContactName] = useState ("");
     const [gender, setGender] = useState ("");
     const [dob, setDateOfBirth] = useState ("");
     const [address, setAddress] = useState ("");
     const [city, setcity] = useState ("");
     const [EmergencContactNo, setEmergencContactNo] = useState ("");
     const [ParentEmail, setParentEmail] = useState ("");
     
     
 
 
     function sendData(e) {
         e.preventDefault();
 
         
         
         const newstudent ={
            StudentName,
            Gradelevel,
            gender,
            dob,
            EmergencContactName,
            EmergencContactNo,
            address,
            city,
            ParentEmail     
         }
 
         axios.post("http://localhost:8070/transportStudent/add", newstudent).then(() => {
             alert('student added successsfully')
             window.location.href = '/AllStudentTrns';
 
         }).catch((err) => {
             alert('student added unsuccesssfully')
         })
     
     }
 
   
     return (
         <div className="container mt-5">
             <form className="form-AddStudentTrns" onSubmit={sendData}>
 
             <h1> Add Transport Student </h1>
 
             <div className="form-group row" >
                <label htmlFor="Student Name" className="col-sm-2 col-form-label">Student Name:</label>
                <div className="col-sm-10">
                 <input type="text" placeholder="Enter student name" className="form-control" id="Student Name" onChange={(e) => {setStudentName(e.target.value);}} required/>
            </div>
            </div>

 
            <div className="form-group row">
                 <label for="Gradelevel" className="col-sm-2 col-form-label">Grade Level:</label>
                 <div className="col-sm-10">
                 <select className="form-control" id="Gradelevel" onChange={(e) => {setGradelevel(e.target.value);}} required>
                           <option value="">Select Grade Level</option>
                           <option value="1">Grade 1</option>
                           <option value="2">Grade 2</option>
                           <option value="3">Grade 3</option>
                           <option value="4">Grade 4</option>
                           <option value="5">Grade 5</option>
                           <option value="6">Grade 6</option>
                           <option value="7">Grade 7</option>
                           <option value="8">Grade 8</option>
                           <option value="9">Grade 9</option>
                           <option value="10">Grade 10</option>
                           <option value="11">Grade 11</option>
                           <option value="12">Grade 12</option>
                 </select>
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
                   <label for="EmergencContactName" className="col-sm-2 col-form-label"> EmergencContactName :</label>
                   <div className="col-sm-10">
                   <input type="text" placeholder="Enter EmergencContactName" className="form-control" id="EmergencContactName" onChange={(e) => {setEmergencContactName(e.target.value);}} required/>
             </div>
             </div>

             <div className="form-group row">
                    <label htmlFor="emergencyContactNo" className="col-sm-2 col-form-label">Emergency Contact Number:</label>
                    <div className="col-sm-10">
                    <input type="text" placeholder="Enter emergency contact number" className="form-control" id="emergencyContactNo" onChange={(e) => setEmergencContactNo(e.target.value)} required />
             </div>
             </div>
 
             <div className="form-group row" >
                 <label for="Address" className="col-sm-2 col-form-label"> Address :</label>
                 <div className="col-md-5 mb-3">
                 <input type="text" placeholder="Enter driver's address" className="form-control" id="Address" onChange={(e) => {setAddress(e.target.value);}} required/>
             </div>
                 <label for="city" className="col-sm-2 col-form-label"> city :</label>
                 <div className="col-md-3 mb-3">
                 <input type="text" placeholder="Enter city" className="form-control" id="city" onChange={(e) => {setcity(e.target.value);}} required/>
             </div>
             </div>
 
 
             <div className="form-group row">
                  <label htmlFor="parent-email" className="col-sm-2 col-form-label">Parent Email:</label>
                  <div className="col-sm-10">
                  <input type="email" className="form-control" id="parent-email" placeholder="Enter parent email" onChange={(e) => setParentEmail(e.target.value)} required/>
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
 
 export default AddStudentTrns;