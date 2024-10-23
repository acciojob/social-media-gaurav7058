import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/landingPage.css"
const LandingPage = ({posts}) => {
  return (
    <div className='posts-list'>
      <h1>Add New Post</h1>

      <div className="">
        <label htmlFor="" id='postTitle'>Post Title:</label>
        <input type="text" placeholder="What is on your mind?"/>
        <label htmlFor="" id='postAuthor'>Author:</label>
        <select name="" id="">
          <option value=""></option>
          <option value="">john</option>
          <option value="">jane</option>
        </select>
        <label htmlFor="" id='postContent'>Content:</label>
        <textarea name="" id="">

        </textarea>
        <button>Save Post</button>
      </div>
    </div>
  );
};

export default LandingPage;
