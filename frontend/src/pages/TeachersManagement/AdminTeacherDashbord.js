import React from "react";
import '../TeachersManagement/styles/styles.TeacherDashbord.css';
import {Link} from 'react-router-dom';

function AdminTeacherDashbord() {
  const styles = {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column-reverse",
    position: "relative"
  };

  const imgStyles = {
    filter: "blur(5px)",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -1,
    width: "50%",
    height: "100%",
    objectFit: "cover",
  };

  const cardStyles = {
    width: "18rem",
    margin: "30px 60px 30px 30px",
  };

  return (
    <div>
      
      <div className="vh-100" style={styles}>
     
        <div style={{ display: "flex", justifyContent: "center" }}>          
          <div className="card" style={cardStyles}>
            <img
              className="card-img-top"
              src="https://png.pngtree.com/png-vector/20221224/ourlarge/pngtree-add-friend-png-image_6534550.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">MANAGE TEACHERS</h5>
              <p className="card-text">Search | Add | Update | Edit | Profile View are here</p>
              <Link to="/add-search-teachers" className="btn btn-primary">Click here</Link>
            </div>
          </div>
          <div className="card" style={cardStyles}>
            <img
              className="card-img-top"
              src="https://th.bing.com/th/id/OIP.iK4S0-EsAUdd0gCPcWS0twHaHg?pid=ImgDet&rs=1"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title"> MANAGE LEAVES </h5>
              <p className="card-text">Generate Leave Report | Reject Leaves are here</p>
              <Link to="/leaveTable" className="btn btn-primary">Click here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTeacherDashbord;