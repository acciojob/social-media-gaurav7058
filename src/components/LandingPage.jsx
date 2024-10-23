import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/landingPage.css"
const LandingPage = ({posts}) => {
    const[post,setPost]=useState([])
  return (
    <div>
      <div className="container">
      <h1>Welcome to GenZ Social</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.author}</h3>
            <p>{post.content}</p>
            <p>Reactions: {post.reactions}</p>
            <Link to={`/edit-post/${post.id}`} className="button">Edit</Link>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
