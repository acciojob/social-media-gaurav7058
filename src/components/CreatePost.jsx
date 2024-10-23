import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ users, setPosts }) => {
  const [author, setAuthor] = useState(users[0]);
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    setPosts(prevPosts => [
      ...prevPosts,
      { id: prevPosts.length + 1, author, content, reactions: 0 }
    ]);
    navigate('/');
  };

  return (
    <div>
      <h2>Create Post</h2>
      <div>
        <label>Select Author</label>
        <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
          {users.map((user) => (
            <option key={user} value={user}>{user}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Content</label>
        <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit Post</button>
    </div>
  );
};

export default CreatePost;
