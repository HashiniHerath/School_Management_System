//LeaveTable
import React, { useEffect, useState } from "react";
import { Component } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import {saveAs} from "file-saver" ;
import 'jspdf-autotable';
import LeaveReport from "../";

function LeaveTable () {
  
  //Retrieve details
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    function getLeaves(){
      axios.get("http://localhost:8070/leave/").then((res) =>{
        setLeaves(res.data);
      }).catch((err) => {
        alert(err.message)
      })
    }
    getLeaves();
  }, [])

  //Delete Leave
  const onDelete = (id) =>{
    axios.delete(`http://localhost:8070/leave/delete/${id}`).then((res) =>{
      setLeaves(leaves.filter(leave => leave._id !== id));
      alert("Leave rejected successfully");
    }).catch((err) => {
      alert(err.message);
    })
  }

  //genarate pdf
  const genaratepdf=async()=>{

    await  axios.post(`http://localhost:8070/leavereport/createpdf`,leaves).then((respnse)=>{
         axios.get(`http://localhost:8070/leavereport/fetchpdf`,{responseType:'blob'}).then((res)=>{
  
         const pdfBlob=new Blob([res.data],{type:'application/pdf'})
         saveAs(pdfBlob,'leave.pdf')
  
         })
    })
  }
  
  return (

    <div className="container-fluid vw-100">
      

      <div class="row m-3">
      </div>
      
      <p className="h1 m-5 text-center text-dark">MANAGE LEAVES</p>      

      <hr style={{backgroundColor: '#535569'}}></hr>

      <button type="sumbit" class="btn btn-primary" onClick={genaratepdf} style={{marginLeft: 10, marginBottom: 10}}>Generate Report</button>
      
      <div class="row m-2">
        <table className="table table-striped table-dark table-bordered" style={{textAlign: 'center'}}>
        <thead>
          <tr>
            <th scope="col-6" style={{width:400}}>Full Name</th>
            <th scope="col" style={{width:400}}>Reason Category</th>
            <th scope="col" style={{width:400}}>Reason</th>
            <th scope="col" style={{width:400}}>Date Of Original Appoinment</th>
            <th scope="col" style={{width:400}}>Start Date Of The Leave</th>
            <th scope="col" style={{width:400}}>Last Day Of The Leave</th>
            <th scope="col" style={{width:400}}>No Of Leave Count</th>
            <th scope="col" style={{width:400}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
          <tr key={leave.id}>
            <td>{leave.fullName}</td>
            <td>{leave.reasonCategory}</td>
            <td>{leave.reason}</td>
            <td>{leave.dateOfOriginalAppoinment}</td>
            <td>{leave.startDateOfTheLeave}</td>
            <td>{leave.lastDayOfTheLeave}</td>
            <td>{leave.noOfLeaveCount}</td>
            <td style={{textAlign: 'center'}}>
              
              <Link to="#" className="btn btn-danger btn-sm m-1" onClick={(e) => {
                e.preventDefault();
                if (window.confirm("Are you sure you want to reject this leave?")) {
                  onDelete(leave._id);
                }
              }}><i className="bi bi-trash3-fill"></i>  Reject</Link>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>

      {/* <LeaveReport/> */}
    </div>

    
  )
  
}

export default LeaveTable;
