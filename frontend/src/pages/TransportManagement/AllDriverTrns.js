import React, { useEffect, useState, } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";



function AllDriverTrns () {

  //retriew drivers
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    function getDrivers(){
      axios.get("http://localhost:8070/transportDriver/").then((res) =>{
        setDrivers(res.data);
      }).catch((err) => {
        alert(err.message)
      })
    }
    getDrivers();
  }, [])

  //Delete Driver
  const onDelete = (id) =>{
    axios.delete(`http://localhost:8070/transportDriver/delete/${id}`).then((res) =>{
      setDrivers(drivers.filter(driver => driver._id !== id));
      alert("Driver deleted successfully");
    }).catch((err) => {
      alert(err.message);
    })
  }

  // search Drivers
  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:8070/transportDriver/").then((res) => {
      if (res.data) {
        const filtereddrivers = res.data.filter((driver) =>
        driver.DriverfullName.toLowerCase().includes(searchKey)
        );
        setDrivers(filtereddrivers);
      }
    }).catch((err) => {
      alert(err.message)
    })
  }
  

  return (

    <div className="container-fluid vh-100" style={{backgroundColor: "white"}}>
      
      <p className="h1 m-5 text-center text-dark"> DRIVER LIST </p>

      <div class="row m-3">    
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by driver name" aria-label="Search" aria-describedby="search-icon" onChange={handleSearchArea} style={{height: 36}}/>
        <div class="input-group-append" style={{width: 1300}}>
          <span class="input-group-text bg-primary" id="search-icon" style={{height: 38, marginTop: 9}}>
            <i class="bi bi-search" style={{color: 'white'}}></i>
          </span>
        </div>
      </div>
      </div>

      <hr style={{backgroundColor: '#535569'}}></hr>

      <div class="row m-3" style={{width: 300, paddingLeft: 20}}>
      <Link to="/addDriver" className="btn btn-secondary" role="button"><i className="bi bi-person-plus-fill"></i>  Add Driver</Link>
      </div>
      
      <div class="row m-2">
        <table className="table table-striped table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col" style={{width: 200}}>DriverfullName</th>
            <th scope="col" style={{width: 400}}>nic</th>
            <th scope="col" style={{width: 400}}>LicenseNo</th>
            <th scope="col" style={{width: 400}}>contact</th>
            <th scope="col" style={{width: 400}}>email</th>
            <th scope="col" style={{width: 300}}></th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
          <tr key={driver.id}>
            <td>{driver.DriverfullName}</td>
            <td>{driver.nic}</td>
            <td>{driver.LicenseNo}</td>
            <td>{driver.contact}</td>
            <td>{driver.email}</td>
            <td  style={{textAlign: 'center'}}>
              

              <Link to="#" className="btn btn-danger btn-sm m-1" onClick={(e) => {
                e.preventDefault();
                if (window.confirm("Are you sure you want to delete this driver?")) {
                  onDelete(driver._id);
                }
              }}><i className="bi bi-trash3-fill"></i>  Delete</Link>

              <Link to={`/UptateDriver/transportDriver/${driver._id}`} className="btn btn-primary btn-sm m-1" role="button"><i className="bi bi-pencil-square"></i>  Update</Link>
            </td>
          </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>

    
  )
  
}

export default AllDriverTrns ;