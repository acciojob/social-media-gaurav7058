import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
   <>
   <nav>
          <div className="nav-heading">
            <h1>GenZ</h1>
          </div>
          <div className="nav-links">
          <div className="nav-1">
            <Link to="/post">Post</Link>
            <Link to="/users">User</Link>
            <Link to="/notifications">Notification</Link>
          </div>
          <div className="nav-2">
            <Link to="/refresh-notification">Refresh Notification</Link>
          </div>
          </div>
        </nav>
   </>
  )
}

export default NavBar
