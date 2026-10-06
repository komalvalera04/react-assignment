/* 1. Create a React Context called UserContext in a new file UserContext.js and provide a default value with a username and a loggedIn status. */

import {createContext } from 'react'

const UserContext = createContext({
  username: "Guest",
  loggedIn: false,
});

export default UserContext