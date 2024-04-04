import React from "react";
import './styles/styles.StudentDashbord.css';
import { Link } from "react-router-dom";

function TeacherStudentDashboard() {
    return (
        
        <div className="container-fluid vh-100" style={{backgroundColor: "white"}}>

        <div className="row justify-content-center">
        
          <div className="examHeader"><h2>EXAMS</h2></div>
          
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1bh9TOSoqJnQthPzGdtdoj_GtTugxgFHq" alt="profile" />
            </div>
            <Link to="/examtable" className="btn btn-primary">ADD EXAM</Link>
          </div>
          

          
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://www.pngall.com/wp-content/uploads/2/Exam.png" alt="timetables" />
            </div>
            <Link to="/Questionteacher" className="btn btn-primary">ADD QUESTION</Link>
          </div>
          
          </div>
        </div>
    );
  }
  

export default TeacherStudentDashboard;