import React from "react";
import '../styles/styles.StudentDashbord.css';
import {Link} from 'react-router-dom';

function AdminTransportDashbord() {
    return (
        
        <div className="container-fluid" style={{paddingTop: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20}}>

        <div className="row justify-content-center" style={{backgroundColor: '#13141A', height: 300}}>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="profile" />
            </div>
            <h4 className="mt-3"><a href="/AllDriverTrns">ADD DRIVER</a></h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
            <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="profile" />
            </div>
            <h4 className="mt-3"><a href="/AllStudentTrns">ADD STUDENT</a></h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://e7.pngegg.com/pngimages/208/784/png-clipart-car-drawing-car-outline-compact-car-car-thumbnail.png" alt="vehicle" />
            </div>
            <h4 className="mt-3"><a href="/Vehicle">ADD VEHICLE</a></h4>
          </div>
        </div>

      </div>
    );
  }
  

export default AdminTransportDashbord;