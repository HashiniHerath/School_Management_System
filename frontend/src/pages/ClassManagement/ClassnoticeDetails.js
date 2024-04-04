
//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './styles.ClassNotice.css'


const ClassnoticeDetails = ({ notice }) => {
  
 

    return (
      <div className="notice-details">
        <h4>{notice.grade}</h4>
        <p><strong>Notice: </strong>{notice.clznotice}</p>
        
        <p>{formatDistanceToNow(new Date(notice.createdAt), {addSuffix: true})}</p>
        
      </div>
    )
  }
  
  export default ClassnoticeDetails

  