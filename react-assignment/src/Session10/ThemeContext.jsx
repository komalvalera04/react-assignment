/* Implement a toggle button in your app that switches between 'light' and 'dark' themes using Context API, and update the background color of the main div accordingly. */


import React,{createContext} from 'react'
const ThemeContext = createContext("light");

export default ThemeContext