
import React from "react";
import './../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import Users from "./Users";
import Post from "./Post";
import Notification from "./Notification";

const App = () => {
  return (
<BrowserRouter>
<NavBar></NavBar>
    <div  className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/notifications" element={<Notification />}/>
      </Routes>
    </div>
</BrowserRouter>
  )
}

export default App
