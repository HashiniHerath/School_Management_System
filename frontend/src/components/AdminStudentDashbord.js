import React from "react";
import {Link} from 'react-router-dom';
import '../styles/styles.StudentDashbord.css';

function AdminStudentDashbord() {
    return (
        
        <div className="container-fluid" style={{paddingTop: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20}}>

        <div className="row justify-content-center" style={{backgroundColor: '#13141A', height: 300}}>


          
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1-JsKPBy-rOJO0qfl5LKEGrJlPneWnu1Z" alt="profile" />
            </div>
              <h4 className="mt-3"><a href="/addstudent">ADD PROFILE</a></h4>
          </div>
          
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1D9QqiNNhrMRZ6Wx0APDYElHdF7DOEsF3" alt="student material" />
            </div>
              <h4 className="mt-3"><a href="/studentlist">SEARCH STUDENTS</a></h4>
          </div>

          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1bh9TOSoqJnQthPzGdtdoj_GtTugxgFHq" alt="timetables" style={{color: 'black', fontSize: 25, fontWeight: 'bold', margin: 30}} />
            </div>
              <h4 className="mt-3"><a href="/generatereport">GENERATE REPORTS</a></h4>
          </div>

        </div>
      </div>
    );
  }
  

export default AdminStudentDashbord;