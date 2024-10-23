import React from 'react'

const Notification = ({notifications,setNotifications}) => {
    const handleRefresh = () => {
        setNotifications(['New comment on your post', 'New follower']);
      };
    
  return (
    <div>
      <h2>Notifications</h2>
      <button className="button" onClick={handleRefresh}>Refresh Notifications</button>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  )
}

export default Notification
