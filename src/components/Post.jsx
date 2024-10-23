import React from 'react'

const Post = ({posts}) => {
  return (
    <div>
      {posts.map((item,id)=>{
        return <div key={item.id}>
        <h1>{item.author}</h1>
        <ul>
          <li>{item.content}</li>
        </ul>
        </div>
      })}
    </div>
  )
}

export default Post
