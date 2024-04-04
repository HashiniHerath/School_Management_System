import React from "react";
import {Link} from 'react-router-dom';
import '../styles/styles.StudentDashbord.css';

function StudentDashbord() {

  // const navigete = useNavigate()

    return (
        
        <div className="container-fluid" style={{paddingTop: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20}}>

        <div className="row justify-content-center" style={{backgroundColor: '#13141A', height: 300}}>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="profile" />
            </div>
            <h4 className="mt-3"><a href="/profile/student/:id">Profile</a></h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=16yv_Rqi4l8hiRyvZ2uUKqynBOg0ArhZ7" alt="student material" />
            </div>
              <h4 className="mt-3"><a href="/SMdashboard_S">Student Material</a></h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1ykq57_eHkme6FNLowI8RylcY2tOS9kU8" alt="timetables" />
            </div>
              <h4 className="mt-3"><a href="/">Timetables</a></h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1TtfbXofZTlILpzLhYObIRRBzoME4wD2S" alt="labs" />
            </div>
              <h4 className="mt-3"><a href="/">Labs</a></h4>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1CZjo0rCJCxxrNvYvlDzFH7H0gY5x6uUj" alt="exams" />
            </div>
              <h4 className=""><a href="/studentExams">Exams</a></h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1gNnD27SuBTbSNzKgfq5QjisSII0qXZcT" alt="clubs" />
            </div>
              <h4 className=""><a href="/ClubHome">Clubs</a></h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="notices" />
            </div>
              <h4 className=""><a href="/ClassNotice">Notices</a></h4>
          </div>
        </div>

      </div>
    );
  }
  

export default StudentDashbord;