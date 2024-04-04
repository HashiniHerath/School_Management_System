import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import "./Table.css"

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  
  

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8070/CreatePost/posts');
      setPosts(response.data.clubs); // Access the 'clubs' array in the response data
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/CreatePost/post/delete/${id}`);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.Club_Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <button className="btn btn-secondary">
         <a href="/CreatePost" style={{ textDecoration: "none", color: "white" }}>
           Create New Post
          </a>
        </button >
        <a href="/print"><button className='backBtn'>Save as PDF</button></a>
      <Form>
        <Form.Group controlId="searchForm">
          <Form.Control
            type="text"
            placeholder="Search by Club Name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
      </Form>
      <Table striped bordered hover className="text-white">
        <thead className="text-white">
          <tr className="text-white">
            <th>Club Name</th>
            <th>Teacher Incharge</th>
            <th>Description</th>
            <th>Club President</th>
            <th>Club Meeting Dates</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {Array.isArray(filteredPosts) && filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <tr key={post._id}>
                <td className="text-white">{post.Club_Name}</td>
                <td className="text-white">{post.Teacher_Incharge}</td>
                <td className="text-white">{post.Description}</td>
                <td className="text-white">{post.Club_President}</td>
                <td className="text-white">{post.Club_Meeting_Dates}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(post._id)}>
                    Delete
                  </Button>
                  <Link to={`/EditPost/${post._id}`} className="btn btn-primary ml-2">
                    Update
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr className="white-text">
              <td colSpan="6">No posts available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default PostTable;