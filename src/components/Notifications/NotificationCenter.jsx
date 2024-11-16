import React from "react";

const NotificationCenter = ({ notifications }) => {
  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))
        ) : (
          <p>No new notifications</p>
        )}
      </ul>
    </div>
  );
};

export default NotificationCenter;
