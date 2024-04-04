import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

function withParams(Component) {
  return props => <Component params={useParams()} />;
}

class PrintPriview extends Component {
  constructor(props) {
    super(props);

    this.status = "";

    this.state = {
      id: props.params.id,
      posts: [],
      filteredPosts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/CreatePost/posts").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
          filteredPosts: res.data.existingPosts
        });
      }
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    });
    this.status = value;
  };

  onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      axios.delete(`/CreatePost/post/delete/${id}`).then((res) => {
        alert("Delete Successfully");
        this.retrievePosts();
      });
    }
  };

//   handleSearchArea = (e) => {
//     const searchKey = e.currentTarget.value.toLowerCase();
//     const filteredPosts = this.state.posts.filter(
//       (post) =>
//         post.Club_Name.toLowerCase().includes(searchKey) ||
//         post.Teacher_Incharge.toLowerCase().includes(searchKey) ||
//         post.Description.toLowerCase().includes(searchKey) ||
//         post.Club_President.toLowerCase().includes(searchKey) ||
//         post.Club_Meeting_Dates.toLowerCase().includes(searchKey)
//     );
//     this.setState({ filteredPosts });
//   };

handlePrint = () => {
    const doc = new jsPDF();
    const table = document.getElementById("contactTable");
    const tableRows = table.querySelectorAll("tr");
  
    
     fetch("../images/sprmeLogo.png")
    
      .then(response => response.arrayBuffer())
      .then(logoData => {
        const logoUrl = URL.createObjectURL(new Blob([logoData]));
  
        
        doc.addImage(logoUrl, "PNG", 10, 21, 40, 40); 
        //doc.text("Supreme Wine Stores", 55, 30);
        doc.text("Address: Bomiriya central college,kaduwela", 55, 40);
        doc.text("Phone: 0915676543", 55, 50);
        doc.text("Email: bomiriyacentralcollege@gmail.com", 55, 60);
        doc.text("Club List", 80, 80); 
  
        
        doc.autoTable({
          html: "#contactTable",
          startY: 90,
        });
  
        doc.save("Contact_Detail_Table.pdf");
      })
      .catch(error => {
        console.error("Error loading logo image:", error);
      });
  };

  render() {
    return (
      <div className="container">
        <br></br>
        <div className="d-flex justify-content-start mb-2">
          
          {/* <button className="btn btn-outline-secondary">Search</button> */}
       
        </div>
        <div className='mt-5'>
          <div className="container">
            <div className="CreatePost_btn mt-2 mb-2"></div>
            <div className="table-responsive">
              <table className="table" id="contactTable">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">ID</th>
                    <th scope="col">Club_Name</th>
                    <th scope="col">Teacher_Incharge</th>
                    <th scope="col">Description</th>
                    <th scope="col">Club_President</th>
                    <th scope="col">Club_Meeting_Dates</th>
                    {/* <th scope="col">Action</th> */}
                    
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.posts.map((post, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{post.Club_Name}</td>
                      <td>{post.Teacher_Incharge}</td>
                      <td>{post.Description}</td>
                      <td>{post.Club_President}</td>
                      <td>{post.Club_Meeting_Dates}</td>
                      {/* <td onClick={() => this.onDelete(post._id)}>
                        <a className="btn btn-danger">
                          <i className="fas fa-trash-alt"></i>
                        </a>
                      </td> */}
                      {/* <td>
                        <a href={`/EditPost/${post._id}`} className="btn btn-primary">
                          <i className="fas fa-edit"></i>
                        </a>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handlePrint} className="backBtn">Save</button><br/>
              
      </div>
      </div>
      </div>
      </div>
    );
  }
}



export default withParams(PrintPriview);