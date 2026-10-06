/* 2. Write a functional component called UserGreeting that takes a username prop and displays 'Hello, {username}!' using JSX. Render it in App.js with your own name as the username. */


import React from 'react'

function UserGreeting({username}) {
  return (
    <div>
        <h2>Hello, {username}</h2>
    </div>
  )
}

export default UserGreeting