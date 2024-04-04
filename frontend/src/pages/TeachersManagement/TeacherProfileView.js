import React, { useState, useEffect } from 'react';
import '../TeachersManagement/styles/styles.ProfileView.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TeacherProfileView = () => {

  // const { id } = useParams();
  const [teacher, setTeacher] = useState({});
  const [id,setid]=useState("");

  useEffect(() => {
    const teacherid=localStorage.getItem('teacherid');
    const id=JSON.parse(teacherid)
    setid(id)

    console.log(id);


    axios.get(`http://localhost:8070/teacher/get/${id}`)
      .then((res) => {
        if(res.data){
          setTeacher(res.data.teacher);
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
              <h5 class="user-name">{teacher.fullName}</h5>
              <h6 class="user-email"> Password: {teacher.password}</h6>
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
                <span class="bg-gradient-primary">{teacher.fullName}</span>
              </p>                
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
                <p>
                <sub>Email</sub><hr class="underline"/>
                <span class="bg-gradient-primary">{teacher.email}</span>
              </p> 
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
                <p>
                <sub>Phone</sub><hr class="underline"/>
                <span class="bg-gradient-primary">{teacher.contact}</span>
              </p> 
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
              <p>
                <sub>Address</sub><hr class="underline"/>
                <span class="bg-gradient-primary">{teacher.address}</span>
              </p> 
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
              <p>
                <sub>Date of birth</sub><hr class="underline"/>
                <span class="bg-gradient-primary">{teacher.dob}</span>
              </p> 
              </div>
            </div>
          </div>

          <div class="row gutters">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 class="mt-3 mb-2 text-primary">Leave Count</h6>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
              <p>
                <sub>Remain leaves</sub><br/>
                <span class="bg-gradient-primary">{teacher.leaveCount}</span>
              </p> 
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      </div>
      </div>
</div>
  )
}

export default TeacherProfileView;
