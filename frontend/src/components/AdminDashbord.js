import React from "react";
import {Link} from 'react-router-dom';
import '../styles/styles.StudentDashbord.css';

function AdminDashbord() {
    return (
        
      <div className="container-fluid" style={{paddingTop: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20}}>
      <div className="row justify-content-center" style={{backgroundColor: '#13141A', height: 300}}>
        <div style={{marginLeft: 2500, marginTop: 2}}>
        <a href="/adminloginpage">
        <button type="sumbit" class="btn btn-primary">LOG OUT</button>
        </a>
        </div>
        <div className="col-md-3">
          <div className="ellipse">
            <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="profile" />
          </div>
          <h4 className="mt-3"><a href="/admindashboardstudent">Students Management</a></h4>
        </div>
        <div className="col-md-3">
          <div className="ellipse">
            <img src="https://drive.google.com/uc?id=16yv_Rqi4l8hiRyvZ2uUKqynBOg0ArhZ7" alt="teacher material" />
          </div>
          <h4 className="mt-3"><a href="/teacherdashboard">Teachers Management</a></h4>
        </div>
        <div className="col-md-3">
          <div className="ellipse">
            <img src="https://drive.google.com/uc?id=1ykq57_eHkme6FNLowI8RylcY2tOS9kU8" alt="timetables" />
          </div>
          <h4 className="mt-3"><a href="/AdminHome">Timetables Management</a></h4>
        </div>
        <div className="col-md-3">
          <div className="ellipse">
            <img src="https://drive.google.com/uc?id=1TtfbXofZTlILpzLhYObIRRBzoME4wD2S" alt="labs" />
          </div>
          <h4 className="mt-3"><a href="/">Labs Management</a></h4>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="ellipse">
            <img src="https://drive.google.com/uc?id=1gNnD27SuBTbSNzKgfq5QjisSII0qXZcT" alt="clubs" />
          </div>
          <h4 className="mt-3"><a href="/ListHome">Clubs Management</a></h4>
        </div>
        <div className="col-md-3">
          <div className="ellipse">
            <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="notices" />
          </div>
          <h4 className="mt-3"><a href="/ClassNoticeAdmin">Notices Management</a></h4>
        </div>
        <div className="col-md-3">
          <div className="ellipse">
            <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="notices" />
          </div>
          <h4 className="mt-3"><a href="/admintransportdashbord">Transport Management</a></h4>
        </div>
        </div>
        </div>
    );
  }
  

export default AdminDashbord;