import React from "react";
import '../styles/styles.TeacherDashbord.css';
import {Link} from 'react-router-dom';

function TeacherDashbord() {
  const styles = {
    backgroundColor: "#f2f2f2",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column-reverse",
    position: "relative",
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
      <div style={styles}>
        <div style={{ display: "flex", justifyContent: "center" }}>
      
          <div className="card" style={cardStyles}>
            <img
              className="card-img-top"
              src="https://th.bing.com/th/id/OIP.iK4S0-EsAUdd0gCPcWS0twHaHg?pid=ImgDet&rs=1"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title"> Leave Form </h5>
              <p className="card-text">Submit Leave Form are here</p>
              <Link to="/leave-form" className="btn btn-primary">Click here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashbord;




// import React from "react";
// import '../styles/styles.TeacherDashbord.css';
// import {Link} from 'react-router-dom';

// function TeacherDashbord() {
//     return (
        
//         <div className="container-fluid">

//         <div className="row justify-content-center">
//           <div className="col-md-3">
//             <div className="ellipse">
//               <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="profile" />
//             </div>
//               <h4 className="">Profile</h4>
//           </div>
//           <div className="col-md-3">
//             <div className="ellipse">
//               <img src="https://drive.google.com/uc?id=16yv_Rqi4l8hiRyvZ2uUKqynBOg0ArhZ7" alt="student material" />
//             </div>
//               <h4 className="">Student Material</h4>
//           </div>
//           <div className="col-md-3">
//             <div className="ellipse">
//               <img src="https://drive.google.com/uc?id=1ykq57_eHkme6FNLowI8RylcY2tOS9kU8" alt="timetables" />
//             </div>
//               <h4 className="">Timetables</h4>
//           </div>
//           <div className="col-md-3">
//             <div className="ellipse">
//               <img src="https://drive.google.com/uc?id=1TtfbXofZTlILpzLhYObIRRBzoME4wD2S" alt="labs" />
//             </div>
//               <h4 className="">Labs</h4>
//           </div>
//         </div>

//         <div className="row justify-content-center">
//           <div className="col-md-3">
//             <div className="ellipse">
//               <img src="https://drive.google.com/uc?id=1CZjo0rCJCxxrNvYvlDzFH7H0gY5x6uUj" alt="exams" />
//             </div>
//               <h4 className="">Exams</h4>
//           </div>
//           <div className="col-md-3">
//             <div className="ellipse">
//               <img src="https://drive.google.com/uc?id=1lNgoHHOmSADWJnGD1mzG3lKg1g9ycnuH" alt="clubs" />
//             </div>
//               <Link to="/leave-form" className="nav-link">Leave Form</Link>
//           </div>
//           <div className="col-md-3">
//             <div className="ellipse">
//               <img src="https://drive.google.com/uc?id=1WNLbY41QoMqBr74KVwnIt6ciurcvZ3ew" alt="notices" />
//             </div>
//               <h4 className="">Notices</h4>
//           </div>
//         </div>

//       </div>
//     );
//   }
  

// export default TeacherDashbord;