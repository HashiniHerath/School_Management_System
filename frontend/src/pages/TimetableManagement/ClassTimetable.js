import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ClassTimeTable() {
    const [timetable, setTimetable] = useState()
    const [teachers, setTeachers] = useState()
    const { id } = useParams()

    useEffect(() => {
        getAllTeachers()
        getClassTimeTable()
    }, [timetable])

    async function getAllTeachers() {
        await axios.get(`http://localhost:8070/teacherJ`).then((res) => {
            setTeachers(res.data)
        }).catch((error) => {
            alert("Failed to fetch teachers")
        })
    }

    async function getClassTimeTable() {
        await axios.get(`http://localhost:8070/classTimetable/${id}`).then((res) => {
            setTimetable(res.data)
        }).catch((error) => {
            alert("Failed to fetch timetable")
        })
    }

    function addSubject(index, value) {
        timetable.subjects[index] = JSON.parse(value)
        updateTimetable(timetable._id,timetable.subjects)
    }

    function removeSubject(index) {
        timetable.subjects[index] = { teacher: null, subject: null }
        updateTimetable(timetable._id,timetable.subjects)
    }

    async function updateTimetable(timetableId, subjects) {
        await axios.put(`http://localhost:8070/classTimetable/`, {timetableId, subjects}).then((res) => {
            setTimetable(res.data.data)
        }).catch((error) => {
            alert("Failed to fetch updated timetable")
        })
    }
    
    return (
        <div className='container'>
            
            <div className='d-flex justify-content-between'>
                <div>
                    <h3 className='tittle1'>{timetable?.classroom.name}</h3>
                    <h3 className='tittle1'>{timetable?.classroom.section} section</h3>
                </div>
                <div>
                    <p>Start Time: 7.30 am</p>
                    <p>End Time: 1.30 pm</p>
                </div>
            </div>
            <table className="table table-dark">
                <thead className='thead'>
                    <tr>
                        <th className='thWeight' scope="col">7.30 - 8.10</th>
                        <th className='thWeight' scope="col">8.10 - 08.50</th>
                        <th className='thWeight' scope="col">08.50 - 09.30</th>
                        <th className='thWeight' scope="col">9.30 - 10.10</th>
                        <th className='thWeight' scope="col">10.10 - 10.50</th>
                        <th className='thWeight' scope="col">10.50 - 11.30</th>
                        <th className='thWeight' scope="col">11.30 - 12.10</th>
                        <th className='thWeight' scope="col">12.10 - 12.50</th>
                        <th className='thWeight' scope="col">12.50 - 1.30</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='align-middle'>
                    {timetable?.subjects.map((subject,index) => {
                        return (
                            <td key={index}>
                                {index === 4 ? (
                                    <p className='mx-4'>Interval</p>
                                ) :  subject.subject === null ? (
                                    <select
                                        className="custom-select" id="inputGroupSelect01" required
                                        onChange={(event) => { addSubject(index, event.target.value) }}
                                    >
                                        <option disabled selected>Select a subject</option>
                                        {teachers?.map(teacher => {
                                            return (
                                                <option
                                                    value={JSON.stringify({ teacher: teacher.name, subject: teacher.subject.name })}
                                                >
                                                    {teacher.subject.name} | {teacher.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                ) : (    
                                    <div>
                                        <p className="">{subject.subject}</p>  
                                        <p className="">By {subject.teacher}</p>
                                        <button
                                            type="button" class="btn btn-outline-light"
                                            onClick={() => { removeSubject(index) }}
                                        >
                                            <i className='fas'>&#xf014;</i> 
                                        </button>
                                    </div> 
                                )}
                            </td>
                        )
                    })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ClassTimeTable
