/* Session 3 – PropsTopics to Cover:Passing data between components.Default props and prop types.Demo:Reusable “Card” component with props. */


import React from 'react'
import ProductCard from './ProductCard'
import UserProfile from './UserProfile'

function Session3() {
  return (
    <div>
        <h1>Props and PropTypes Example</h1>

        <h2>Product Card</h2>
        <ProductCard productName="Wireless Headphones" price={2499}/>

        <h2>User Profiles</h2>

        {/* All props provided */}
        <UserProfile username="Komal" followers={100} profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8X0O5AG4-MTGSwxPn9YO4onkBVayX0gB9WEMSbo43LoDGCEFLVTIQeE&s=10"/>

        {/* Testing default props */}
        <UserProfile username="newuser" />
    </div>
  )
}

export default Session3