import React from 'react'

const Users = ({users}) => {
  return (
    <div>
        <h1>Users</h1>
      {users.map((item,id)=>{
        return <div key={id}>
        <ul>
            <li>{item}</li>
        </ul>
        </div>
      })}
    </div>
  )
}

export default Users
