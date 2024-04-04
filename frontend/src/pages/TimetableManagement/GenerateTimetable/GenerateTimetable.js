
import React, { useState } from 'react'
import './GenerateTimetable.css';
import NewClassTimetable from './NewClassTimetable';
import NewExamTimetable from './NewExamTimetable';

function GenerateTimeTable() {
    const [tabValue, setTab] = useState(1)

    return (
        <div>
            <center>
                <button type="button" class="btn btn-light" onClick={() => setTab(1)}>Generate Class Timetable</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-light" onClick={() => setTab(2)}>Generate Exam Timetable</button>
            </center>

            {tabValue === 1 ? (
                <NewClassTimetable/>
            ): (
                <NewExamTimetable/>
            )}

        </div>
    )
}

export default GenerateTimeTable
