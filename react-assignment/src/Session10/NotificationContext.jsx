/* 5. Use ChatGPT or GitHub Copilot to generate a code snippet for a React context that manages notification count (like unread messages in WhatsApp), then integrate it into a small demo component that displays the count. */


import React,{createContext, useState} from 'react'

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notificationCount, setNotificationCount] = useState(3);

  const addNotification = () => {
    setNotificationCount((count) => count + 1);
  };

  const clearNotifications = () => {
    setNotificationCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationCount,
        addNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext