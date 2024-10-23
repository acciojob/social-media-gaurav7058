
import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import Users from "./Users";
import Post from "./Post";
import Notification from "./Notification";
import CreatePost from "./CreatePost";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: 'John', content: 'Hello World', reactions: 0 },
    { id: 2, author: 'Jane', content: 'Goodbye World', reactions: 2 }
  ]);
  const [users, setUsers] = useState(['John', 'Jane']);
  const [notifications, setNotifications] = useState([]);
  return (
<BrowserRouter>
<NavBar></NavBar>
    <div  className="App">
      <Routes>
        <Route path="/" element={<LandingPage posts={posts}/>}/>
        <Route path="/users" element={<Users posts={posts} users={users}/>}/>
        <Route path="/post" element={<Post posts={posts}/>}/>
        <Route path="/notifications" element={<Notification notifications={notifications} setNotifications={setNotifications}/>}/>
        <Route path="/create-post" element={<CreatePost users={users} setPosts={setPosts}/>}/>
      </Routes>
    </div>
</BrowserRouter>
  )
}

export default App
