import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './styles/styles.StudentProfileView.css';


const AdminStudentProfileView = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  
  useEffect(() => {
    axios.get(`http://localhost:8070/student/get/${id}`)
      .then((res) => {
        if(res.data){
          setStudent(res.data.student);
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert("Error with get user !");
      });
  }, [id]);

  return (
    <div class="container">
      <div class="row gutters">
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div class="card h-100">
        <div class="card-body">
          <div class="account-settings">
            <div class="user-profile">
              <div class="user-avatar">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
              </div>
              <h5 class="user-name">{student.fullName}</h5>
              <h6 class="user-email"> Password: {student.password}</h6>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
      <div class="card h-100">
        <div class="card-body">
          <div class="row gutters">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 class="mb-2 text-primary">Personal Details</h6>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
              <p>
                <sub>Full Name</sub><hr class="underline"/>
                <span class="bg-gradient-primary">{student.fullName}</span>
              </p>                
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
                <p>
                <sub>Email</sub><hr class="underline"/>
                <span class="bg-gradient-primary">{student.email}</span>
              </p> 
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
                <p>
                <sub>Phone</sub><hr class="underline"/>
                <span class="bg-gradient-primary">{student.contactHome}</span>
              </p> 
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
              <p>
                <sub>Address</sub><hr class="underline"/>
                <span class="bg-gradient-primary">{student.address}{student.city}</span>
              </p> 
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
              <p>
                <sub>Date of birth</sub><hr class="underline"/>
                <span class="bg-gradient-primary">{student.dob}</span>
              </p> 
              </div>
            </div>
          </div>

          <div class="row gutters">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 class="mt-3 mb-2 text-primary">Achievements</h6>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
              <p>
                <sub></sub><br/>
                <span class="bg-gradient-primary">{}</span>
              </p> 
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      </div>
      </div>
</div>
  );
};

export default AdminStudentProfileView;
