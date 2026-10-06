/* Session 10 – Context APITopics to Cover:Global state management.useContext hook.Demo:Theme toggle (dark/light mode). */

import React, { useContext, useState } from 'react'
import UserContext from './UserContext'
import Navbar from './Navbar';
import ThemeContext from './ThemeContext';
import Parent from './Parent';
import { NotificationProvider } from './NotificationContext';
import Notification from "./Notification";

function Session10() {
  const [theme, setTheme] = useState("light");

  const user = {
    username: "John",
    loggedIn: true,
  };

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  const mainStyle = {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#222222" : "#ffffff",
  };

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <NotificationProvider>
          <div style={mainStyle}>
            <Navbar />

            <button onClick={toggleTheme}>
              Switch to {theme === "light" ? "dark" : "light"} mode
            </button>

            <hr />

            <Parent />

            <hr />

            <Notification />
          </div>
        </NotificationProvider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default Session10