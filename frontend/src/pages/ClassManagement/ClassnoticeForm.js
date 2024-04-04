import { useState } from 'react'
import './styles.ClassNotice.css'

const ClassnoticeForm = () => {
  const [grade, setGrade] = useState('')
  const [clznotice, setClznotice] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const notice = {grade, clznotice}
    
    const response = await fetch('/api/notices/', {
      method: 'POST',
      body: JSON.stringify(notice),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setGrade('')
      setClznotice('')
      setEmptyFields([])
      //alert("Added Successfully! Please refresh the page")
      console.log('new notice added:', json)
      window.location.reload()
    }

  }

  return (
    <div className='container'>
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Notice</h3>

      <label>Grade:</label>
      <input 
        type="text" 
        onChange={(e) => setGrade(e.target.value)} 
        value={grade}
        className={emptyFields.includes('grade') ? 'error' : ''}
      />

      <label>Notice :</label>
      <input 
        type="text" 
        onChange={(e) => setClznotice(e.target.value)} 
        value={clznotice}
        className={emptyFields.includes('clznotice') ? 'error' : ''}
      />
      
     

      <button>Add Notice</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default ClassnoticeForm