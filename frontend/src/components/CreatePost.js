import React, {useState,Component} from 'react'
import './form.css'
import axios from 'axios';


//const CreatePost = () => {
export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            Club_Name: '',
            Teacher_Incharge: '',
            Description: '',
            Club_President: '',
            Club_Meeting_Dates:'',
        }
    }


    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { Club_Name, Teacher_Incharge, Description,Club_President,Club_Meeting_Dates } = this.state;

        const data = {
            Club_Name: Club_Name,
            Teacher_Incharge: Teacher_Incharge,
            Description: Description,
            Club_President:Club_President,
            Club_Meeting_Dates:Club_Meeting_Dates

        }
        console.log(data);

        axios.post("http://localhost:5000/CreatePost/post/save", data).then((res) => {
            if (res.data.success) {
                console.log(res.data.success._id);
                var id = res.data.success._id
                window.location.href = `/ListHome`;

                this.setState(
                    {
                        Club_Name: "",
                        Teacher_Incharge: "",
                        Description: "",
                        Club_President: "",
                        Club_Meeting_Dates:"",
                        
                    }
                )
            }
        })

    }

 render(){
    return (
        <div className='container'>
            <a href="/ListHome"><button className='backBtn'>Club List</button></a>
            
            <form className="create" >
            <h3>Create New Club</h3>

            <label>Club Name</label>
            <input type="text" name="Club_Name" value={this.state.Club_Name}
                         onChange={this.handleChange} id="formGroupExampleInput"  />
           

            <label>Teacher_Incharge: </label>
            <input type="text" name="Teacher_Incharge" value={this.state.Teacher_Incharge}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Description: </label>
            <input type="text" name="Description" value={this.state.Description}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Club_President: </label>
            <input type="text" name="Club_President" value={this.state.Club_President}
                         onChange={this.handleChange} id="formGroupExampleInput" 
                          />
            
            <label>Club Meeting Dates:</label>
<input type="date" name="Club_Meeting_Dates"
       value={this.state.Club_Meeting_Dates}
       onChange={this.handleChange} id="formGroupExampleInput" required
       min={new Date().toISOString().split("T")[0]} />

         
            <center><button className='formBtn' type="submit" onClick={this.onSubmit}>Create Club</button></center>

            
            
        </form>
        </div>
    )
}

 }
   

//export default CreatePost;