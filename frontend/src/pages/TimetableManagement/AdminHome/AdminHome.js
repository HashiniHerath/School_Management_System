import { Link } from 'react-router-dom';
import './AdminHome.css';
import React from 'react'

function AdminHome() {
    return (
        <div className=''>
            <center>
                <div className='row'>
                    <div className='col-4'>
                        <Link to='/teachers'>
                            <div className='circle'>
                                <center>
                                    <img className='' src='/images/TimeTableMSAdmin/1.png' alt='TEACHERS'></img>
                                </center>
                            </div>
                            <p className='pt-3'> TEACHERS</p>
                        </Link>                          
                    </div>
                    <div className='col-4'>
                        <Link to='/Subjects'>
                            <div className='circle'>
                                <center>
                                    <img className='' src='/images/TimeTableMSAdmin/2.png' alt='SUBJECTS'></img>
                                </center>
                            </div>
                            <p className='pt-3'> SUBJECTS</p>
                        </Link>
                    </div>
                    <div className='col-4'>
                        <Link to='/Classes'>
                            <div className='circle'>
                                <center>
                                    <img className='' src='/images/TimeTableMSAdmin/3.png' alt='CLASSES'></img>
                                </center>
                            </div>
                            <p className='pt-3'> CLASSES</p>
                        </Link>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-4'>
                        <Link to='/GenerateTimetable'>
                            <div className='circle'>
                                <center>
                                    <img className='' src='/images/TimeTableMSAdmin/4.png' alt='LabM'></img>
                                </center>
                            </div>
                                <p className='pt-3'>Generate Timetable</p>
                        </Link>
                        <br/><br/>
                    </div>
                    <div className='col-4'>
                        <Link to='/AllClassTimetables'>
                            <div className='circle'>
                                <center>
                                    <img className='' src='/images/TimeTableMSAdmin/5.png' alt='Club'></img>
                                </center>
                            </div>
                                <p className='pt-3'>View Class Timetables</p>
                        </Link>
                    </div>
                    <div className='col-4'>
                        <Link to='/AllExamTimetables'>
                            <div className='circle'>
                                <center>
                                    <img className='' src='/images/TimeTableMSAdmin/5.png' alt='Club'></img>
                                </center>
                            </div>
                                <p className='pt-3'>View Exam Timetables</p>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'></div>  
                    <div className='col-4'>
                        <div className='circle'>
                            <center>
                                <img className='' src='/images/TimeTableMSAdmin/7.png' alt='TRANSPORT'></img>
                            </center>
                        </div>
                        <p className='pt-3'>Add Notices</p>
                    </div>  
                    <div className='col-4'></div>
                </div>
            </center>
            
        </div>
    )
}

export default AdminHome
