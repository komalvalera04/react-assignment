import React from 'react'
import { NavLink } from 'react-router-dom'

function Session9() {
  return (
    <div>
      <div className="container">
        <nav>
          <NavLink to="/home" style={({ isActive }) => ({ marginRight: "20px", color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal" })}>Home</NavLink>
          <NavLink to="/deals" style={({ isActive }) => ({ marginRight: "20px", color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal" })}>Deals</NavLink>
          <NavLink to="/cart" style={({ isActive }) => ({ marginRight: "20px", color: isActive ? "blue" : "black", fontWeight: isActive ? "bold" : "normal" })}>Cart</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Session9