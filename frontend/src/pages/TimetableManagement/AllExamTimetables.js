import axios from 'axios'
import { useReactToPrint } from "react-to-print";
import React,{useRef, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function AllExamTimetables() {
    const [timetables, setTimetables] = useState()
    const componentRef = useRef();

    useEffect(() => {
        getTimetables()
    }, [])

    async function getTimetables() {
        await axios.get(`http://localhost:8070/examTimetable/`).then((res) => {
            setTimetables(res.data)
        }).catch((error) => {
            alert("Failed to fetch timetables")
        })
    }

    function filterContent(data, searchTerm){
        const results = data.filter((timetable) => 
            timetable.classroomId.name.toLowerCase().includes(searchTerm) || timetable.date.toLowerCase().includes(searchTerm)
        )
        setTimetables(results)
    }

    function handleSearch(event){
        const searchTerm = event.currentTarget.value
        axios.get(`http://localhost:8070/examTimetable/`).then((res) => {
            filterContent(res.data, searchTerm.toLowerCase())
        }).catch((error) => {
            alert("Failed to fetch timetables")
        })
    }
    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        copyStyles: true
    });

    return (
        <div className='container'>
            <div className="my-5 d-flex justify-content-between">
                <input className="form-control search" type="search" placeholder="Search by date or class" onChange={handleSearch} />
                <button onClick={handlePrint} className="btn btn-success">Generate Report</button>
            </div>
            <div id="report" ref={componentRef}>
                <center>
                    <h1 className="text-light mb-5">Exam Timetables</h1>
                </center>
                {timetables?.map((timetable, index) => {
                    return (
                        <div className="mb-5">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h3 className="text-light">{timetable.classroomId.name}</h3>
                                    <h3 className="text-light">{timetable.classroomId.section} section</h3>
                                </div>
                                <div className="d-flex mt-4 h-25 justify-content-around">
                                    <h3 className="text-light mx-3">{timetable.date}</h3>
                                    <h3 className="text-light mx-3">Start Time: {timetable.startTime}</h3>
                                    <h3 className="text-light mx-3">End Time: {timetable.endTime}</h3>
                                    <Link to={`/ExamTimetable/${timetable._id}`}>
                                        <button class="btn btn-primary mx-3">View Timetable</button>
                                    </Link>
                                    
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
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllExamTimetables
