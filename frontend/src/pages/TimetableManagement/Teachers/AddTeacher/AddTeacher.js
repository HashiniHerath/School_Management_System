import './AddTeacher.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTeacher() {
    const [name, setName] = useState()
    const [subject, setSubject] = useState()
    const [subjects, setSubjects] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getAllSubjects()
    }, [])

    async function getAllSubjects() {
        axios.get(`http://localhost:8070/subject/`).then((res) => {
            setSubjects(res.data) 
        }).catch((error) => {
            alert("Failed to fetch subjects")
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:8070/teacherJ/add", { name, subject }).then(()=>{
            alert("Teacher added")
            navigate('/teachers')
        }).catch((error) => {
            alert("Failed to add teacher")
        })
    }
    
    return (
        <div className=' container box pt-3 pb-5'>
            <form onSubmit={handleSubmit} className='bgColor box'>
                <center>
                    <h3 className='white bgT pt-4 pb-4'>Add Teacher</h3>
                    <br/>
                </center>
                <br/>
                <div className="form-group px-4 mb-4">
                    <label for="exampleInputPassword1">Name:</label><br/>
                    <input
                        type="text" class="form-control" id="subject" placeholder="Enter Teacher Name" required
                        onChange={(event)=> {setName(event.target.value)}}
                    />
                </div>
                <div className="form-group px-4">
                    <label for="exampleInputPassword1">Subject:</label><br/>
                    <select
                        className="custom-select" id="inputGroupSelect01" required
                        onChange={(event) => { setSubject(event.target.value) }}
                    >
                        <option disabled selected>Select Subject</option>
                        {subjects?.map(subject => {
                            return (
                                <option value={subject._id}>{subject.name}</option>
                            )
                        })}
                    </select>
                </div>
                <br/>

                <div className='row pb-3'>
                    <center>
                        <button type="submit" className="signIN btn btn-dark">Close</button>
                        &nbsp;&nbsp;&nbsp;
                        <button type="submit" className="signIN btn btn-dark">Save</button>
                    </center>  
                </div>
            </form>
        </div>
    )
}

export default AddTeacher
