import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import './styles.ClassNotice.css'



const ClassnoticeFormEdit = () => {
  
  const { id } = useParams();
  const [data, setData] = useState([]);
  //const navigate = useNavigate();

  // states for the form
  const [classgrade, setClassGrade] = useState("");
  const [classnotice, setClassNotice] = useState("");
  

  useEffect(() => {
    const getNotice = async () => {
      const res = await axios.get(`/api/notices/${id}`);
      console.log(res.data);
      setData(res.data);

      setClassGrade(res.data.grade);
      setClassNotice(res.data.clznotice);
     
    };
    getNotice();
  }, [id]);

  const handleUpdate = () => {
    axios
      .patch(`/api/notices/${id}`, {
        grade: classgrade,
        clznotice: classnotice,
        
      })
      .then((res) => {
        console.log(res.data);
        //navigate("/");
      });
  };



  return (

    <div className="container-flex vh-100" style={{backgroundColor: "white"}}>
    
    <div className='container'>
    <form className="create"> 
      <h3>Update Notice</h3>

      <label>Grade:</label>
      <input 
       type="text"
       defaultValue={data.grade}
       onChange={(e) => {
         setClassGrade(e.target.value);
       }}
        
      />

      <label>Notice :</label>
      <input 
        type="text"
        defaultValue={data.clznotice}
        onChange={(e) => {
          setClassNotice(e.target.value);
        }}
        
      />
      
     

      <button onClick={handleUpdate}>update notice</button>
      <Link to="/ClassNoticeAdmin">
          <button>close</button>
        </Link>
      
    </form>
    </div>
    </div>
  )
};

export default ClassnoticeFormEdit;