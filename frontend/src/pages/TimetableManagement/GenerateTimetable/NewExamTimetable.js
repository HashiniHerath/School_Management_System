import React, { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function NewExamTimetable() {
    const [date, setDate] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [classroomId, setClassroomId] = useState()
    const [classes, setClasses] = useState()
    const [subjects, setSubjects] = useState()
    const [teachers, setTeachers] = useState()
    const [subjectList, setSubjectList] = useState([{ subjectId: "", startTime: "", endTime: "", teacherId: "" }])
    const navigate = useNavigate()
    
    useEffect(() => {
        getAllClasses()
        getAllSubjects()
        getAllTeachers()
    }, [])

    async function getAllClasses() {
        axios.get(`http://localhost:8070/classroom/`).then((res) => {
            setClasses(res.data) 
        }).catch((error) => {
            alert("Failed to fetch classes")
        })
    }

    async function getAllSubjects() {
        axios.get(`http://localhost:8070/subject/`).then((res) => {
            setSubjects(res.data) 
        }).catch((error) => {
            alert("Failed to fetch subjects")
        })
    }

    async function getAllTeachers() {
        await axios.get(`http://localhost:8070/teacherJ`).then((res) => {
            setTeachers(res.data)
        }).catch((error) => {
            alert("Failed to fetch teachers")
        })
    }

    // handle input change
    const handleInputChange = (event, index) => {
        const {name,value} = event
        
        const list = [...subjectList];
        list[index][name] = value;
        setSubjectList(list);
    };


    // handle click event of the Remove button
    const handleRemoveSubject = index => {
        const list = [...subjectList];
        list.splice(index, 1);
        setSubjectList(list);
    };

    // handle click event of the Add button
    const handleAddSubject = () => {
        setSubjectList([...subjectList, { subjectId: "", startTime: "", endTime: "", teacherId: "" }]);
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const newTimetable = {
            date,
            classroomId,
            startTime,
            endTime,
            subjectList
        }

        console.log(newTimetable);

        await axios.post("http://localhost:8070/examTimetable/add", newTimetable)
        .then((result) => {
            alert("Timetable created")
            navigate(`/ExamTimetable/${result.data._id}`)
        }).catch((error) => {
            alert("Failed to create timetable")
        })
    }

    return (
        <div className='container box mt-5 p-4'>
            <form onSubmit={handleSubmit} className='bgColor'>
                <center>
                    <h3 className='white bgT pt-4 pb-4'>Exam Timetable</h3>
                    <br/>
                </center>
                
                <div className="row p-4">
                    <div className="form-group col-6 mb-4">
                        <label>Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                className='bgWW'
                                inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                fullWidth 
                                required
                                onChange={(newValue) => setDate(dayjs(newValue).format('DD/MM/YYYY'))}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className="form-group col-6 mb-4">
                        <label>Classroom</label>
                        <select
                            className="custom-select" required
                            onChange={(event) => { setClassroomId(event.target.value) }}
                        >
                            <option disabled selected>Select classroom</option>
                            {classes?.map(classroom => {
                                return (
                                    <option value={classroom._id}>{classroom.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className="col-6">
                            <label>Exam Start Time:</label>
                            <MobileTimePicker
                                className='bgWW'
                                inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                onChange={(newValue) => setStartTime(dayjs(newValue).format("hh:mm A"))}
                            />
                        </div>
                        <div className = "col-6">
                            <label>Exam End Time:</label>
                            <MobileTimePicker
                                className='bgWW'
                                inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                onChange={(newValue) => setEndTime(dayjs(newValue).format("hh:mm A"))}
                            />
                        </div>
                    </LocalizationProvider>
                </div>
                <hr/>

                {subjectList.map((x, index) => {
                    return ( 
                        <div className="row p-4">
                            <div className="form-group col-6 mb-4">
                                <label>Teacher In-Charge:</label>
                                <select
                                    className="custom-select" required
                                    onChange={(event) => {
                                        handleInputChange(
                                            { value: event.target.value, name: "teacherId" },
                                            index
                                        );
                                    }}
                                >
                                    <option disabled selected>Select teacher</option>
                                    {teachers?.map(teacher => {
                                        return (
                                            <option value={teacher._id}>{teacher.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-group col-6 mb-4">
                                <label>Subject:</label>
                                <select
                                    className="custom-select" required
                                    onChange={(event) => {
                                        handleInputChange(
                                            { value: event.target.value, name: "subjectId" },
                                            index
                                        );
                                    }}
                                >
                                    <option disabled selected>Select Subject</option>
                                    {subjects?.map(subject => {
                                        return (
                                            <option value={subject._id}>{subject.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <div className="form-group col-6 mb-4">
                                    <label>Exam Start Time:</label>
                                    <MobileTimePicker
                                        className='bgWW'
                                        inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                        onChange={(newValue) => {
                                            handleInputChange(
                                                { value: dayjs(newValue).format("hh:mm A"), name: "startTime" },
                                                index
                                            );
                                        }}
                                    />
                                </div>
                                <div className="form-group col-6 mb-4">
                                    <label>Exam End Time:</label>
                                    <MobileTimePicker
                                        className='bgWW'
                                        inputProps={{ style: { backgroundColor: 'white', borderRadius: '4px' } }}
                                        onChange={(newValue) => {
                                            handleInputChange(
                                                { value: dayjs(newValue).format("hh:mm A"), name: "endTime" },
                                                index
                                            );
                                        }}
                                    />
                                </div>
                            </LocalizationProvider>
                            {subjectList.length !== 1 && 
                                <div className="col-1">
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => handleRemoveSubject(index)}
                                    >
                                        <RemoveIcon />
                                    </button>
                                </div>
                            }
                            <div className="col-1">
                                {subjectList.length - 1 === index &&
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => handleAddSubject()}
                                    >
                                        <AddIcon />
                                    </button>
                                }
                            </div>
                            <hr className="mt-2" />
                        </div>
                    );
                })}
                
                <div className="pb-4">
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

export default NewExamTimetable