/* 1. Create a new React component called LikeButton that displays a heart icon and a count starting at 0; use the useState hook to increment the count by 1 each time the button is clicked. */


import React, { useState } from 'react'

function LikeButton() {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div>
        <h2>Like Button</h2>

        <button onClick={handleLike}>
           <span style={{ fontSize: "24px" }}>&#9825; {likes}</span>
        </button>
        </div>
    );
}

export default LikeButton