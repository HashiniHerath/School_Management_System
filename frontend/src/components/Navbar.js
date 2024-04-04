import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  const [auth, setAuth] = useState("");
  const navigate = useNavigate();

  useEffect(() => {   
    const studentid = localStorage.getItem('studentid');
    const id = JSON.parse(studentid);
    setAuth(id);
    console.log(auth);
  }, [])

  const handleLogout = () => {
    localStorage.clear(); // remove user details from local storage
    // navigate = '/hompage'; // reload the page to update the navbar
  }

  return(
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src="https://drive.google.com/uc?id=16dsAg1kliNFBtx78DTZTJUbgmA9bB4ep" width="60" height="60" className="d-inline-block align-top" alt=""/>
        <h4 className="m-0 ml-2" style={{paddingLeft: 30}}>Boomiriya Central College</h4>
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        </div>
        
        {auth && (
          <div className="navbar-nav ml-auto" style={{width: 1700, alignContent: "center", alignItems: "center"}}>
            <Link to={"/"}> 
            <button type="button" class="btn btn-secondary btn-sm btn-block" onClick={handleLogout}>LogOut</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
