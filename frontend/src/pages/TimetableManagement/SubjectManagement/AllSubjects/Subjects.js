import './Subjects.css';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import BorderColorIcon from '@mui/icons-material/BorderColor';

function Subjects() {
    const [subjects, setSubjects] = useState()
    const [selectedIndex, setSelectedIndex] = useState()
    const [editValue, setEditValue] = useState(true)
    const [updatedSubject, setUpdatedSubject] = useState("");

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

    function filterContent(data, searchTerm){
        const results = data.filter((subject) => 
            subject.name.toLowerCase().includes(searchTerm)
        )
        setSubjects(results)
    }

    function handleSearch(event){
        const searchTerm = event.currentTarget.value
        axios.get(`http://localhost:8070/subject`).then((res) => {
            filterContent(res.data, searchTerm.toLowerCase())
        }).catch((error) => {
            alert("Failed to fetch subjects")
        })
    }

    function handleEditChange(index) {
        setSelectedIndex(index)
        setEditValue(!editValue)
    }

    async function handleUpdate(objId,e) {
        const data = { objId, updatedSubject }

        const config = {
            headers: {
                "content-Type": "application/json",
            },
        };

        await axios.put(`http://localhost:8070/subject/`,data ,config).then(() => {
            alert("Subject updated successfully")
            window.location.reload()
        }).catch((error) => {
            alert(`Failed to update the subject`)
        })
    }

    async function deleteSubject(id){
        const config = {
            headers: {
                "content-Type": "application/json",
            },
        };

        if(window.confirm('Are you sure?\nThis action cannot be undone')){
            await axios.delete(`http://localhost:8070/subject/${id}`, config).then(() => {
                alert("Subject deleted successfully")
            }).catch((error) => {
                alert(`Failed to delete the subject`)
            })
        }
    }
    
    return (
        <div className='container-fluid'>
            <div className='mb-5'>
                <input className="form-control search" type="search" placeholder="Search" onChange={handleSearch} />
            </div>
            <div className='d-flex justify-content-between mb-3'>
                <h1 className='tittle1'>Subject Information</h1>
                <Link to='/Subjects/Add'>
                    <button className="addBtn btn btn-secondary" type="submit">+ Add New</button>
                </Link>
            </div>
            <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects?.map((subject,index) => {
                        return (
                            <tr>
                                <td>
                                    {(editValue && selectedIndex === index) ? (
                                        <form>
                                            <div className="d-flex justify-content-between">
                                                <input
                                                    type="text" class="form-control" id="subject" placeholder="Enter Subject Name" required
                                                    onChange={(event)=> {setUpdatedSubject(event.target.value)}}
                                                />
                                                <button onClick={() => handleUpdate(subject._id)} className="signIN mx-2 btn btn-primary">Update</button>
                                            </div>
                                        </form>
                                    ): (
                                        <div>{subject.name}</div>
                                    )}
                                </td>
                                <td className='icon'>
                                    <button
                                        onClick={() => handleEditChange(index)}
                                        type="button" class="btn btn-outline-light"
                                    >
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    &nbsp;
                                    <button
                                        type="button" class="btn btn-outline-light"
                                        onClick={() => deleteSubject(subject._id)}
                                    >
                                        <i className="bi bi-trash3-fill"></i>
                                    </button> 
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <br/><br/>

            

            <br/><br/><br/>
        </div>
    )
}

export default Subjects

