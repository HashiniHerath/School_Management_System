

// import React, { Component } from 'react';
// import axios from 'axios';
// import { useParams, useLocation } from "react-router-dom";
// import "./form.css"
// function withParams(Component) {
//   return props => <Component params={useParams()} />
// }

// class EditPost extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       id: props.params.id,
//       posts: [],
//       Club_Name: '',
//       Teacher_Incharge: '',
//       Description: '',
//       Club_President: '',
//       Club_Meeting_Dates: '',
      
//     };
//   }

//   componentDidMount() {
//     console.log(this.state.id);
//     const id = this.state.id
//     axios.get(`http://localhost:5000/CreatePost/post/${id}`).then((res) => {
//       console.log(res.data.post);
//       if (res.data.success) {
//         this.setState({
//           posts: res.data.post
//         });
//         console.log(this.state.posts);
//       }

//     });
//   }


//   //edit 
//   handleChange = (e) => {
//     const { name, value } = e.target;

//     this.setState({
//       ...this.state,
//       [name]: value
//     });
//   }
//   onSubmit = (e) => {
//     e.preventDefault();
//     const id = this.state.id

//     const { Club_Name, Teacher_Incharge, Description,Club_President,Club_Meeting_Dates } = this.state;
//     let data =  this.state.posts;  
//     data = {
//       Club_Name: Club_Name.length != 0 ? Club_Name : data.Club_Name,
//       Teacher_Incharge: Teacher_Incharge.length != 0 ? Teacher_Incharge : data.Teacher_Incharge,
//       Description: Description.length != 0 ? Description : data.Description,
//       Club_President: Club_President.length != 0 ? Club_President : data.Club_President,
//       Club_Meeting_Dates: Club_Meeting_Dates.length != 0 ? Club_Meeting_Dates : data.Club_Meeting_Dates,
//     }


//     axios.put(`http://localhost:5000/EditPost/post/update/${id}`, data).then((res) => {
//       if (res.data.success) {
//         console.log(res.data.success._id);
//         alert("Updated Successfully");
//         var id = res.data.success._id
//         window.location.href = `/ListHome`;

//         this.setState(
//           {
//             Club_Name: '',
//             Teacher_Incharge: '',
//             Description: '',
//             Club_President:'',
//             Club_Meeting_Dates:'',
//           }
//         )
//       }
//     })

//   }



//   render() {
    
//     const { Club_Name, Teacher_Incharge, Description,Club_President,Club_Meeting_Dates } = this.state.posts;
//     return (
//         <div className='container'>
//         {/* <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a> */}
//         <a href="/ListHome"><button className='backBtn'>Club List</button></a>
        
//         <form className="create" >
//         <h3>Update Club</h3>


        
//         {/* <label>ID: </label>
//         <input type="text" name="_id" value={this.state._id}
//                      onChange={this.handleChange} id="formGroupExampleInput" placeholder={_id}  /> */}



//         <label>Club_Name: </label>
//         <input type="text" name="Club_Name" value={this.state.Club_Name}
//                      onChange={this.handleChange} id="formGroupExampleInput" placeholder={Club_Name}  />
       

//         <label>Teacher_Incharge: </label>
//         <input type="text" name="Teacher_Incharge" value={this.state.Teacher_Incharge}
//                      onChange={this.handleChange} id="formGroupExampleInput" placeholder={Teacher_Incharge} />

//         <label>Description: </label>
//         <input type="text" name="Description" value={this.state.Description}
//                      onChange={this.handleChange} id="formGroupExampleInput"placeholder={Description}  />

//         <label>Club_President: </label>
//         <input type="text" name="Club_President" value={this.state.Club_President}
//                      onChange={this.handleChange} id="formGroupExampleInput"placeholder={Club_President}  />

//         <label>Club_Meeting_Dates: </label>
//         <input type="text" name="Club_Meeting_Dates" value={this.state.Club_Meeting_Dates}
//                      onChange={this.handleChange} id="formGroupExampleInput"placeholder={Club_Meeting_Dates}  />

     
//         <center><a href='/ListHome'><button className='formBtn' type="submit" onClick={this.onSubmit}>Update club</button></a></center>

        
        
//     </form>
//     </div>

     





//     )
//   }
// }



// export default withParams(EditPost);

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './form.css';

const EditPost = () => {
  const [id, setId] = useState('');
  const [posts, setPosts] = useState({});
  const [Club_Name, setClubName] = useState('');
  const [Teacher_Incharge, setTeacherIncharge] = useState('');
  const [Description, setDescription] = useState('');
  const [Club_President, setClubPresident] = useState('');
  const [Club_Meeting_Dates, setClubMeetingDates] = useState('');

  const { id: paramsId } = useParams();

  useEffect(() => {
    console.log(paramsId);
    setId(paramsId);

    axios.get(`http://localhost:8070/CreatePost/post/${paramsId}`).then((res) => {
      console.log(res.data.post);
      if (res.data.success) {
        setPosts(res.data.post);
        setClubName(res.data.post.Club_Name);
        setTeacherIncharge(res.data.post.Teacher_Incharge);
        setDescription(res.data.post.Description);
        setClubPresident(res.data.post.Club_President);
        setClubMeetingDates(res.data.post.Club_Meeting_Dates);
      }
    });
  }, [paramsId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'Club_Name':
        setClubName(value);
        break;
      case 'Teacher_Incharge':
        setTeacherIncharge(value);
        break;
      case 'Description':
        setDescription(value);
        break;
      case 'Club_President':
        setClubPresident(value);
        break;
      case 'Club_Meeting_Dates':
        setClubMeetingDates(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      Club_Name: Club_Name || posts.Club_Name,
      Teacher_Incharge: Teacher_Incharge || posts.Teacher_Incharge,
      Description: Description || posts.Description,
      Club_President: Club_President || posts.Club_President,
      Club_Meeting_Dates: Club_Meeting_Dates || posts.Club_Meeting_Dates,
    };

    axios.put(`http://localhost:8070/EditPost/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        console.log(res.data.success._id);
        alert('Updated Successfully');
        const updatedId = res.data.success._id;
        window.location.href = `/ListHome`;
        setClubName('');
        setTeacherIncharge('');
        setDescription('');
        setClubPresident('');
        setClubMeetingDates('');
      }
    });
  };


return (
<div className='container'>
<a href="/ListHome"><button className='backBtn'>Club List</button></a>

<form className="create" >
    <h3>Update Club</h3>

    <label>Club_Name: </label>
        <input type="text" name="Club_Name" value={Club_Name} onChange={handleChange} id="formGroupExampleInput" placeholder={posts.Club_Name} />

    <label>Teacher_Incharge: </label>
    <input type="text" name="Teacher_Incharge" value={Teacher_Incharge} onChange={handleChange} id="formGroupExampleInput" placeholder={posts.Teacher_Incharge} />

    <label>Description: </label>
    <input type="text" name="Description" value={Description} onChange={handleChange} id="formGroupExampleInput" placeholder={posts.Description} />

    <label>Club_President: </label>
    <input type="text" name="Club_President" value={Club_President} onChange={handleChange} id="formGroupExampleInput" placeholder={posts.Club_President} />
    <label>Club_Meeting_Dates: </label>
    <input type="text" name="Club_Meeting_Dates" value={Club_Meeting_Dates} onChange={handleChange} id="formGroupExampleInput" placeholder={posts.Club_Meeting_Dates} />

    <center><a href='/ListHome'><button className='formBtn' type="submit" onClick={onSubmit}>Update club</button></a></center>
  </form>
</div>
);
};

export default EditPost;




