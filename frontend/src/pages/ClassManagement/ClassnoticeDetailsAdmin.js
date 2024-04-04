
//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { useNavigate } from 'react-router-dom'
import './styles.ClassNotice.css'
//import ClassnoticeFormEdit from './ClassnoticeFormEdit';

const ClassnoticeDetailsAdmin = ({ notice }) => {
  
  //UPDATE
  
  let navigate = useNavigate();
  const onUpdate = () => {
    let path = `../ClassnoticeFormEdit/${notice._id}`;
    navigate(path);
  }
  

  //DELETE
    const handleClick = async () => {
    const response = await fetch('/api/notices/'+ notice._id, {
      method: 'DELETE'
    })
    //const json = await response.json()

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    //alert("Deleted Successfully!! Please refresh the page")
    
    //return response.json();
    window.location.reload()
    return false
    
    
  }
 

    return (
      <div className="notice-details-admin">
        <h4>{notice.grade}</h4>
        <p><strong>Notice: </strong>{notice.clznotice}</p>
        
        <p>{formatDistanceToNow(new Date(notice.createdAt), {addSuffix: true})}</p>
        <button className='update-btn' onClick={onUpdate}>update</button>
        <button className='delete-btn' onClick={handleClick}>delete</button>
      </div>
    )
  }
  
  export default ClassnoticeDetailsAdmin

  