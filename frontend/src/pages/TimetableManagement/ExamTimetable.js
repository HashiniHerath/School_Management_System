import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ExamTimetable() {
    const [timetable, setTimetable] = useState()
    const { id } = useParams()

    useEffect(() => {
        getExamTimeTable()
    }, [])

    async function getExamTimeTable() {
        await axios.get(`http://localhost:8070/examTimetable/${id}`).then((res) => {
            setTimetable(res.data)
        }).catch((error) => {
            alert("Failed to fetch timetable")
        })
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex mt-4 h-25 justify-content-around'>
                    <h4 className='tittle1'>{timetable?.classroomId.name}</h4>
                    <h4 className='tittle1 px-3'>{timetable?.classroomId.section} section</h4>
                </div>
                <div className="d-flex mt-4 h-25 justify-content-around mx-3">
                    <h4 className="text-light">Date :</h4>
                    <h4 className="text-light px-3">{timetable?.date}</h4>
                </div>
                <div className="d-flex mt-4 h-25 justify-content-around mx-3">
                    <h4 className="text-light mx-2">Start Time : {timetable?.startTime}</h4>
                    <h4 className="text-light px-3">End Time : {timetable?.endTime}</h4>
                </div>
            </div>
            <table className="table table-bordered table-dark">
                <thead className='thead'>
                    <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Teacher In-Charge</th>
                    </tr>
                </thead>
                <tbody>
                    {timetable?.subjectList.map((subject, index) => {
                        return (
                            <tr key={index}>
                                <td>{subject.subjectId?.name}</td>
                                <td>{subject.startTime}</td>
                                <td>{subject.endTime}</td>
                                <td>{subject.teacherId?.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br/><br/><br/>
        </div>
    )
}

export default ExamTimetable

