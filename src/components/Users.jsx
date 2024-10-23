import React, { useState } from 'react'

const Users = ({ users, posts }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user} onClick={() => setSelectedUser(user)}>{user}</li>
          ))}
        </ul>
  
        {selectedUser && (
          <div>
            <h3>Posts by {selectedUser}</h3>
            <div className="posts-list">
              {posts.filter(post => post.author === selectedUser).map((post) => (
                <div key={post.id} className="post">
                  <p>{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}

export default Users
