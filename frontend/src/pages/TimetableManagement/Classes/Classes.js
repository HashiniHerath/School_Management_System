import './Classes.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Class() {
    const [classes, setClasses] = useState()

    useEffect(() => {
        getAllClasses()
    }, [])

    async function getAllClasses() {
      axios.get(`http://localhost:8070/classroom/`).then((res) => {
        setClasses(res.data) 
      }).catch((error) => {
        alert("Failed to fetch classes")
      })
    }

    function filterContent(data, searchTerm){
        const results = data.filter((classroom) => 
            classroom.name.toLowerCase().includes(searchTerm) || classroom.section.toLowerCase().includes(searchTerm)
        )
        setClasses(results)
    }

    function handleSearch(event){
        const searchTerm = event.currentTarget.value
        axios.get(`http://localhost:8070/classroom`).then((res) => {
            filterContent(res.data, searchTerm.toLowerCase())
        }).catch((error) => {
            alert("Failed to fetch classes")
        })
    }

    async function deleteClass(id){
        const config = {
            headers: {
                "content-Type": "application/json",
            },
        };

        if(window.confirm('Are you sure?\nThis action cannot be undone')){
            await axios.delete(`http://localhost:8070/classroom/${id}`, config).then(() => {
                alert("Class deleted successfully")
            }).catch((error) => {
                alert(`Failed to delete the class`)
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
                <div className='col-4'>
                    <p>Subject Information</p>
                </div>
                <div className='col-6'></div>
                <div className='col-2 px-4 pb-3'>
                    <Link to='/classes/add'>
                        <button className="addBtn btn btn-secondary" type="submit">+ Add New</button>
                    </Link>
                </div>
            </div>
            <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">Class Name</th>
                        <th scope="col">Section</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {classes?.map(classroom => {
                        return (
                            <tr>
                                <td>{classroom.name}</td>
                                <td>{classroom.section}</td>
                                <td className='icon'>
                                    <button type="button" class="btn btn-outline-light">
                                    <i className="bi bi-pencil-square"></i>
                                    </button>
                                    &nbsp;
                                    <button
                                        type="button" class="btn btn-outline-light"
                                        onClick={() => deleteClass(classroom._id)}
                                    >
                                        <i className="bi bi-trash3-fill"></i>
                                    </button> 
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Class
