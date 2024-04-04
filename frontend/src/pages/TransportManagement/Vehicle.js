//Vehicle



import React, { useState, useEffect } from 'react';
import '../TransportManagement/AddDriverTrns.css';
import axios from 'axios';

function Vehicle() {
  
    
    const [VehicleName, setVehicleName] = useState ("");
    const [VehicleNo, setVehicleNo] = useState ("");
    const [AssignedDriver, setAssignedDriver] = useState ("");
    
    


    function sendData(e) {
        e.preventDefault();

        
        
        const newvehicle ={
            VehicleName,
            VehicleNo,
            AssignedDriver    
        }

        axios.post("http://localhost:8070/transportVehicle/add", newvehicle).then(() => {
            alert('vehicle added successsfully')
            window.location.href = '/admintransportdashbord';

        }).catch((err) => {
            alert('vehicle added unsuccesssfully')
        })
    
    }

  
    return (
        <div className="container mt-5">
            <form className="form-Vehicle" onSubmit={sendData}>

            <h1> vehicle information </h1>

            <div className="form-group row" >
                 <label htmlFor="Vehicle Name" className="col-sm-2 col-form-label">Vehicle Name:</label>
                 <div className="col-sm-10">
                 <input type="text" placeholder="Enter vehicle name" className="form-control" id="Vehicle Name" onChange={(e) => {setVehicleName(e.target.value);}} required/>
            </div>
            </div>



            <div className="form-group row" >
                 <label htmlFor="Vehicle No" className="col-sm-2 col-form-label">Vehicle No:</label>
                 <div className="col-sm-10">
                 <input type="text" placeholder="Enter vehicle number" className="form-control" id="Vehicle No" onChange={(e) => {setVehicleNo(e.target.value);}} required/>
            </div>
            </div>


            <div className="form-group row">
                 <label htmlFor="assignedDriver" className="col-sm-2 col-form-label">Assigned Driver:</label>
                 <div className="col-sm-10">
                 <input type="text" placeholder="Enter assigned driver name" className="form-control" id="assignedDriver" onChange={(e) => setAssignedDriver(e.target.value)} required/>
            </div>
            </div>

            
            <div style={{textAlign: 'center'}}>
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </div>
            
            
        </form>
        </div>
    );
    }

export default Vehicle;