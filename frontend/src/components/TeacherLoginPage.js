import React from 'react';
import '../styles/styles.loginPage.css';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function TeacherLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const [myData, setMyData] = useState("");

    useEffect(() => {
        const teacherId = localStorage.getItem("teacherId");
    
        console.log(teacherId);
      }, []);
    
      const handleLogin = async (event) => {
        event.preventDefault();
    
        // Validate email
        if (email === "") {
          setEmailError("Please enter your email");
          return;
        } else {
          setEmailError("");
        }
    
        // Validate password
        if (password === "") {
          setPasswordError("Please enter your password");
          return;
        } else {
          setPasswordError("");
        }
    
        console.log(email);
        console.log(password);
    
        let result = await fetch("http://localhost:8070/teacher/login", {
          method: "post",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        result = await result.json();
        console.warn(result);
    
        if (result.auth) {
          navigate("/teacher-dashboard");
    
          localStorage.setItem("teacherid", JSON.stringify(result.teacher._id));
          localStorage.setItem("teacheremail", JSON.stringify(result.teacher.email));
        }
      };

    return(
      <div class="container-fluid vh-100">

        <div class="row vh-100 p-4 d-flex align-items-center justify-content-center">

          {/* Left Side */}
          <div class="col-md-6 py-4" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <img src="https://drive.google.com/uc?id=16dsAg1kliNFBtx78DTZTJUbgmA9bB4ep" class="img-fluid" alt="Image" />
            <h2 class="text-white mt-4">Boomiriya Central College</h2>
          </div>

          {/* Right Side */}
          <div class="col" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#13141A"}}>
            <form class="form-container mx-5">
              <h3 class="text-dark mb-4">Teacher Login</h3>

              <div class="form-group pt-4">
                <h6>Teacher Email: </h6>
                <input type="email" class="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                {emailError && <small className="text-danger">{emailError}</small>}
              </div>

              <div class="form-group pt-2">
                <h6>Teacher Password: </h6>
                <input type="password" class="form-control" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {passwordError && <small className="text-danger">{passwordError}</small>}
              </div>

              <div class="form-group pt-4">
                <button type="submit" class="btn btn-dark" onClick={handleLogin}>Login</button>
              </div>
            </form>
          </div>

        </div>

      </div>

    )    
}

export default TeacherLoginPage;