import React from "react";
import {Link} from 'react-router-dom';
import './styles.ClassNotice.css'

function SMdashboard_T() {
    return (
        <div className="card-container">
        <div>
        <Link to="/ALbio">
          <div className="card">
            <h2>A/L Bio</h2>
          </div>
        </Link>
        
        <Link to="/ALtech">
          <div className="card">
            <h2>A/L Tech</h2>
          </div>
        </Link>
        <Link to="/ALarts">
          <div className="card">
            <h2>A/L Arts</h2>
          </div>
        </Link>
        <Link to="/ALmaths">
          <div className="card">
            <h2>A/L Maths</h2>
          </div>
        </Link>
        <div  style={{paddingLeft: 460}}>
        <Link to="/ALcommerce">
          <div className="card">
            <h2>A/L Commerce</h2>
          </div>
        </Link>
        </div>
        
      </div>
      </div>
          
      );
  }
  

export default SMdashboard_T;