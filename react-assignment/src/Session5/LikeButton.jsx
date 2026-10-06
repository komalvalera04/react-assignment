/* 1. Create a React component called LikeButton that displays a button and a count. When the button is clicked, increment the count and update the display. */


import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Like
      </button>

      <p>Likes: {count}</p><br/><br/>
    </div>
  );
}

export default LikeButton;
