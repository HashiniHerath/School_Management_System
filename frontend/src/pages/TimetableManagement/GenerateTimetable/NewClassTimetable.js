import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

function NewClassTimetable() {
    const [date, setDate] = useState()
    const [classroomId, setClassroomId] = useState()
    const [classes, setClasses] = useState()
    const navigate = useNavigate()

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

    function generateClassTimeTable(e) {
        e.preventDefault()
        const data = {
            date: dayjs(date).format('DD/MM/YYYY'),
            classroom: classroomId
        }

        axios.post("http://localhost:8070/classTimeTable/add", data).then((result)=>{
            alert("Timetable created")
            navigate(`/ClassTimeTable/${result.data._id}`)
        }).catch((error) => {
            alert("Failed to create timetable")
        })
    }
    return (
         <div className='container box mt-5 py-3'>
            <form onSubmit={generateClassTimeTable} className='bgColor'>
                <center>
                    <h3 className='white bgT py-3'>Class Timetable</h3>
                </center>
                <div className='row my-4'>
                    <div className='col-xl-6'>
                        <div className="form-group px-4">
                            <label for="exampleInputUsername">Date:</label><br/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    className='bgWW'
                                    inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                    fullWidth required
                                    onChange={(newValue) => setDate(newValue)}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="form-group pe-4">
                            <label for="exampleInputPassword1">Classroom</label>
                            <select
                                className="custom-select inputWidth" id="inputGroupSelect01" required
                                onChange={(event) => { setClassroomId(event.target.value) }}
                            >
                                <option disabled>Select classroom</option>
                                {classes?.map((classData) => {
                                    return (
                                        <option value={classData._id}>{classData.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='pb-3' align='center'>
                    <button type="submit" className=" btn btn-dark">Create Timetable</button>
                </div>
            </form>
        </div>
    )
}

export default NewClassTimetable