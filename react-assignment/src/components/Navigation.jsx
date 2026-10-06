import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <div className="container">
        <ul>
          <li><NavLink to="/session2">Session-2</NavLink></li>
          <li><NavLink to="/session3">Session-3</NavLink></li>
          <li><NavLink to="/session4">Session-4</NavLink></li>
          <li><NavLink to="/session5">Session-5</NavLink></li>
          <li><NavLink to="/session7">Session-7</NavLink></li>
          <li><NavLink to="/session8">Session-8</NavLink></li>
          <li><NavLink to="/home">Session-9</NavLink></li>
          <li><NavLink to="/session10">Session-10</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation