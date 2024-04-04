
import { useEffect, useState } from "react"

// components
import ClassnoticeDetailsAdmin from "./ClassnoticeDetailsAdmin"
import ClassnoticeForm from "./ClassnoticeForm"
import '../ClassManagement/styles.ClassNotice.css'
import axios from "axios"
import {saveAs} from "file-saver" ;
import 'jspdf-autotable';

/*
const ClassNoticeAdmin = () => {
  const [notices, setNotices] = useState(null)

  useEffect(() => {
    const fetchNotices = async () => {
      const response = await fetch('/api/notices')
      const json = await response.json()

      if (response.ok) {
        setNotices(json)
      }
    }

    fetchNotices()
  }, [])

  return (
    <div className="home">
      <div >
        {notices && notices.map(notice => (
          <ClassnoticeDetailsAdmin notice={notice} key={notice._id} />
        ))}
      </div>
      <ClassnoticeForm/>
    </div>
  )
}

export default ClassNoticeAdmin*/

const ClassNoticeAdmin = () => {
  const [notices, setNotices] = useState(null)
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchNotices = async () => {
      const response = await fetch('/api/notices')
      const json = await response.json()

      if (response.ok) {
        setNotices(json)
      }
    }

    fetchNotices()
  }, [])

  //genarate pdf
  const genaratepdf=async()=>{

    await  axios.post(`http://localhost:8070/clznoticereport/createpdf`,notices).then((respnse)=>{
         axios.get(`http://localhost:8070/clznoticereport/fetchpdf`,{responseType:'blob'}).then((res)=>{
  
         const pdfBlob=new Blob([res.data],{type:'application/pdf'})
         saveAs(pdfBlob,'Class Notice.pdf')
  
         })
    })
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotices = notices
    ? notices.filter((notice) =>
        notice.grade.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="title" style={{backgroundColor: "white"}}>
      <h2>NOTICES</h2>
      <button type="sumbit" class="btn btn-primary" onClick={genaratepdf} style={{marginLeft: 60, marginBottom: 10}}>Generate Report</button>
    <div className="home">
      <div className="search-admin">
      <input
          type="text"
          placeholder="Search by Grade"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <br/>
      

      <div className="noticeData">
      {filteredNotices.map(notice => (
        <ClassnoticeDetailsAdmin notice={notice} key={notice._id} />
      ))}
      </div>
      <ClassnoticeForm/>
    </div>
    </div>
  )
}

export default ClassNoticeAdmin