import React, { useState } from 'react'
import './AddClass.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddClassForm() {
    const [name, setName] = useState("");
    const [section, setSection] = useState("");
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:8070/classroom/add", { name, section }).then(()=>{
            alert("classroom created")
            navigate('/classes')
        }).catch((error) => {
            alert("Failed to create classroom")
        }) 
    }

    return (
        <div className='container box pt-3 pb-5'>
            <form onSubmit={handleSubmit} className='bgColor'>
                <center>
                    <h3 className='white bgT pt-4 pb-4'>Add Class</h3>
                    <br/>
                </center>
                <div className="form-group mb-4 px-4">
                    <label for="exampleInputPassword1">Class Name:</label><br/>
                    <input
                        type="text" class="form-control" id="subject" placeholder="Enter class name"
                        onChange={(event)=> {setName(event.target.value)}}
                    />
                </div>
                <div className="form-group px-4">
                    <label for="exampleInputPassword1">Section:</label><br/>
                    <input
                        type="text" class="form-control" id="subject" placeholder="Enter class section"
                        onChange={(event)=> {setSection(event.target.value)}}
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

export default AddClassForm