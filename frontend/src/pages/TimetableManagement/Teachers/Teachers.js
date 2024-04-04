
import './Teachers.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Teachers() {
    const [teachers, setTeachers] = useState()
    const [selectedIndex, setSelectedIndex] = useState()
    const [editValue, setEditValue] = useState(true)
    const [updatedName, setUpdatedName] = useState("");

    useEffect(() => {
        getAllTeachers()
    }, [])

    async function getAllTeachers() {
        axios.get(`http://localhost:8070/teacherJ`).then((res) => {
            setTeachers(res.data) 
        }).catch((error) => {
            alert("Failed to fetch teachers")
        })
    }

    function filterContent(data, searchTerm){
        const results = data.filter((teacher) => 
            teacher.name.toLowerCase().includes(searchTerm) || teacher.subject.name.toLowerCase().includes(searchTerm)
        )
        setTeachers(results)
    }

    function handleSearch(event){
        const searchTerm = event.currentTarget.value
        axios.get(`http://localhost:8070/teacherJ`).then((res) => {
            filterContent(res.data, searchTerm.toLowerCase())
        }).catch((error) => {
            alert("Failed to fetch teachers")
        })
    }

    function handleEditChange(index) {
        setSelectedIndex(index)
        setEditValue(!editValue)
    }

    async function handleUpdate(objId,e) {
        const data = { objId, updatedName }
        console.log(data)

        const config = {
            headers: {
                "content-Type": "application/json",
            },
        };

        await axios.put(`http://localhost:8070/teacherJ/`,data ,config).then(() => {
            alert("Teacher updated successfully")
            window.location.reload()
        }).catch((error) => {
            // alert(`Failed to update the teacher`)
        })
    }

    async function deleteTeacher(id){
        const config = {
            headers: {
                "content-Type": "application/json",
            },
        };

        if(window.confirm('Are you sure?\nThis action cannot be undone')){
            await axios.delete(`http://localhost:8070/teacherJ/${id}`, config).then(() => {
                alert("Teacher deleted successfully")
            }).catch((error) => {
                alert(`Failed to delete the teacher`)
            })
        }
    }

    return (
        <div className=' container'>
            
            <div className="row">
                <div className="col-4">
                    <input className="form-control search" type="search" placeholder="Search" onChange={handleSearch}/>
                </div>
            </div>

            <hr className='size'/>

            <div className='row'>
                <div className='col-4 d-flex justify-content-between mb-3'>
                    <h1 className='tittle1'>Teacher Information</h1>
                </div>
                <div className='col-6'></div>
                <div className='col-2 px-4 pb-3'>
                    <Link to='/teachers/add'>
                        <button className="addBtn btn btn-secondary" type="submit">+ Add New</button>
                    </Link>  
                </div>
            </div>
            <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                     {teachers?.map((teacher,index) => {
                        return (
                            <tr>
                                <td>
                                    {(editValue && selectedIndex === index) ? (
                                        <form>
                                            <div className="d-flex justify-content-between">
                                                <input
                                                    type="text" class="form-control" id="subject" placeholder="Enter Teacher Name" required
                                                    onChange={(event)=> {setUpdatedName(event.target.value)}}
                                                />
                                                <button onClick={() => handleUpdate(teacher._id)} className="signIN mx-2 btn btn-primary">Update</button>
                                            </div>
                                        </form>
                                    ): (
                                        <div>{teacher?.name}</div>
                                    )}
                                </td>
                                <td>{teacher?.subject?.name}</td>
                                <td className='icon'>
                                   <button
                                        onClick={() => handleEditChange(index)}
                                        type="button" class="btn btn-outline-light"
                                    >
                                        <i className='fas'>&#xf044;</i> 
                                    </button>
                                    &nbsp;
                                    <button
                                        type="button" class="btn btn-outline-light"
                                        onClick={() => deleteTeacher(teacher?._id)}
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
        </div>
    )
}

export default Teachers
