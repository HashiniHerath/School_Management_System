import { useEffect, useState } from "react"
import '../ClassManagement/styles.ClassNotice.css'
// components
import ClassnoticeDetails from "./ClassnoticeDetails"


const ClassNotice = () => {
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
    <div className="home">
      <div className="search-user">
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
          <ClassnoticeDetails notice={notice} key={notice._id} />
        ))}
      </div>
      
    </div>
    </div>
  )
}

export default ClassNotice