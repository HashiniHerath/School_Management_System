import axios from 'axios'
import { useReactToPrint } from "react-to-print";
import React,{useRef, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function AllClassTimetables() {
    const [timetables, setTimetables] = useState()
    const componentRef = useRef();

    useEffect(() => {
        getTimetables()
    }, [])

    async function getTimetables() {
        await axios.get(`http://localhost:8070/classTimetable/`).then((res) => {
            setTimetables(res.data)
        }).catch((error) => {
            alert("Failed to fetch timetables")
        })
    }

    function filterContent(data, searchTerm){
        const results = data.filter((timetable) => 
            timetable.classroom.name.toLowerCase().includes(searchTerm) || timetable.date.toLowerCase().includes(searchTerm)
        )
        setTimetables(results)
    }

    function handleSearch(event){
        const searchTerm = event.currentTarget.value
        axios.get(`http://localhost:8070/classTimetable/`).then((res) => {
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
                    <h1 className="text-light mb-5">Class Timetables</h1>
                </center>
                {timetables?.map((timetable, index) => {
                    return (
                        <div className="mb-5">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h3 className="text-light">{timetable.classroom.name}</h3>
                                    <h3 className="text-light">{timetable.classroom.section} section</h3>
                                </div>
                                <div className="d-flex mt-4 h-25 justify-content-around">
                                    <h3 className="text-light mx-3">{timetable.date}</h3>
                                    <h3 className="text-light mx-3">Start Time: 7.30 am</h3>
                                    <h3 className="text-light mx-3">End Time: 1.30 pm</h3>
                                    <Link to={`/ClassTimetable/${timetable._id}`}>
                                        <button class="btn btn-primary mx-3">Edit Data</button>
                                    </Link>
                                    
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
                                                    <p>No subject</p>
                                                ) : (    
                                                    <div>
                                                        <p className="">{subject.subject}</p>  
                                                        <p className="">By {subject.teacher}</p>
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
                })}
            </div>
        </div>
    )
}

export default AllClassTimetables
