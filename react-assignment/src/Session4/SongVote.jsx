/* 3. Create a SongVote component for a Spotify playlist where users can upvote or downvote a song; display the current vote count and update it using useState when the up or down arrow is clicked.<br><br><em><strong>Hint:</strong> Prevent the vote count from going below zero.</em> */


import React, { useState } from 'react'

function SongVote() {
    const [votes, setVotes] = useState(0);

    const upVote = () => {
        setVotes(votes + 1);
    };

    const downVote = () => {
        if (votes > 0) {
            setVotes(votes - 1);
        }
    };

    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "20px",
                margin: "20px 0",
                width: "300px",
            }}
        >
            <h2>Shape of You</h2>

            <button onClick={upVote}>&#9650;</button>

            <span style={{ margin: "0 20px" }}>
                {votes}
            </span>

            <button onClick={downVote}>&#9660;</button>
        </div>
    );
}

export default SongVote