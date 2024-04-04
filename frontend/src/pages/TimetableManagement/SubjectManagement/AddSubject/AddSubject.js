import './AddSubject.css';
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddSubject() {
    const [subject, setSubject] = useState("");
     const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:8070/subject/add", { subject }).then(()=>{
            alert("Subject added")
            navigate('/subjects')
        }).catch((error) => {
            alert("Failed to add subject")
        }) 
    }

    return (
        <div className='container box pt-3 pb-5'>
            <form onSubmit={handleSubmit} className='bgColor'>
                <center>
                    <h3 className='white bgT pt-4 pb-4'>Add Subject</h3>
                    <br/>
                </center>
                <div className="form-group px-4">
                    <label for="exampleInputPassword1">Subject Name:</label><br/>
                    <input
                        type="text" class="form-control" id="subject" placeholder="Enter Subject Name" required
                        onChange={(event)=> {setSubject(event.target.value)}}
                    />
                </div>
                <br/>
                <div className="row pb-3">
                    <center>
                        <button type="reset" className="signIN btn btn-dark">Close</button>
                        &nbsp;&nbsp;&nbsp;
                        <button type="submit" className="signIN btn btn-dark">Add</button>
                    </center>
                </div>  
            </form>
        </div>
    )
}

export default AddSubject
