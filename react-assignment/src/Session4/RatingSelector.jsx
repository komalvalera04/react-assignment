/* 4. Build a Zomato-style rating selector: display 5 stars, and when a user clicks on a star, highlight all stars up to that one using useState to track the selected rating. */


import React, { useState } from 'react'

function RatingSelector() {
    const [rating, setRating] = useState(0);

    return (
        <div>
            <h2>Rate this restaurant</h2>

            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => setRating(star)} style={{fontSize: "35px",cursor: "pointer",color: star <= rating ? "gold" : "gray"}}>&#9733;</span>
            ))}

            <p>Your rating: {rating}/5</p>
        </div>
    );
}

export default RatingSelector