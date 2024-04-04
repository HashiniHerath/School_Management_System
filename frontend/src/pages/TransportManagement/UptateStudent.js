import React, { useState, useEffect } from 'react';
import '../TransportManagement/AddDriverTrns.css';
import axios from 'axios';
import { useParams } from "react-router-dom";


const UptateStudent = () => {
    
    const { id } = useParams();
    const [student, setStudent] = useState({
        StudentName : " ",
        Gradelevel : " ",
        EmergencContactName : " ",
        EmergencContactNo : " "
        
    });

  useEffect(() => {
    axios.get(`http://localhost:8070/transportStudent/get/${id}`).then((res) =>{
      if(res.data) {
        setStudent({
            StudentName : res.data.transportStudent.StudentName,
            Gradelevel : res.data.transportStudent.Gradelevel,
            EmergencContactName : res.data.transportStudent.EmergencContactName,
            EmergencContactNo : res.data.transportStudent.EmergencContactNo
            
        });
      }
    });
  }, [id]);

    const handleInputChange = (e) => {
        const{ name, value } =e.target;

        setStudent({
            ...student,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {StudentName, Gradelevel, EmergencContactName, EmergencContactNo, address} = student;

        if (!StudentName || !Gradelevel || !EmergencContactName|| !EmergencContactNo  ) {
            const errorDiv = document.createElement('div');

            alert('Please fill in all fields');
            return;
        }

    const data = {
        StudentName : StudentName,
        Gradelevel : Gradelevel,
        EmergencContactName : EmergencContactName,
        EmergencContactNo : EmergencContactNo
        
    };

    axios.put(`http://localhost:8070/transportStudent/update/${id}`, data).then((res) => {
        if(res.data){
            alert(' updated successfully');
            window.location.href = '/AllStudentTrns';
            setStudent({
                StudentName : "",
                Gradelevel : "",
                EmergencContactName : "",
                EmergencContactNo : ""
                
            });

        }
    });
    }

  
  return (
    <div className="container mt-5">
        <form className="form-AddStudentTrns">

        <h1>UPDATE Student</h1>

        <div className="form-group row" >
            <label for="StudentName" className="col-sm-2 col-form-label"> Full Name :</label>
            <div className="col-sm-10" >
            <input type="text" placeholder="Enter full name" className="form-control" id="StudentName" value={student.StudentName} name='StudentName' onChange={handleInputChange}/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="Gradelevel" className="col-sm-2 col-form-label"> Gradelevel :</label>
            <div className="col-sm-10">
            <input type="text" placeholder="Enter Gradelevel" className="form-control" id="Gradelevel" value={student.Gradelevel} name='Gradelevel' pattern="^\d{11}[vV]|\d{12}$" onChange={handleInputChange} required/>
        </div>
        </div>



        <div className="form-group row" >
            <label for="EmergencContactName" className="col-sm-2 col-form-label"> Emergenc Contact Name :</label>
            <div className="col-sm-10" >
            <input type="text" placeholder="Enter full name" className="form-control" id="EmergencContactName" value={student.EmergencContactName} name='EmergencContactName' onChange={handleInputChange}/>
        </div>
        </div>

        <div className="form-group row" >
            <label for="EmergencContactNo" className="col-sm-2 col-form-label">Emergenc Contact No :</label>
            <div className="col-sm-10">
            <input type="text" placeholder="Enter EmergencContactNo" className="form-control" id="EmergencContactNo" value={student.EmergencContactNo} name='EmergencContactNo' pattern="^\d{11}[vV]|\d{12}$" onChange={handleInputChange} required/>
        </div>
        </div>

        <div style={{textAlign: 'center'}}>
        <button type="sumbit" class="btn btn-primary" onClick={onSubmit}>Update</button>
        </div>
    

      </form>
    </div>
  );
}

export default UptateStudent;