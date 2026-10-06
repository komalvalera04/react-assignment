import React, { useContext } from "react";
import NotificationContext from "./NotificationContext";

function Notification() {
  const {
    notificationCount,
    addNotification,
    clearNotifications,
  } = useContext(NotificationContext);

  return (
    <div>
      <h2>Notifications 🔔</h2>

      <p>Unread messages: {notificationCount}</p>

      <button onClick={addNotification}>
        New Message
      </button>

      <button onClick={clearNotifications}>
        Clear Notifications
      </button>
    </div>
  );
}

export default Notification;
