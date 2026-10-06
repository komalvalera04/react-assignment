/* 5. Use ChatGPT or GitHub Copilot to generate an example of an Axios POST request in React, then adapt the code to submit a new comment (with fields: username and comment) to https://jsonplaceholder.typicode.com/comments and display the response below your form. */


import axios from 'axios';
import React, { useState } from 'react'

function AddComment() {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [response, setResponse] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("https://jsonplaceholder.typicode.com/comments", {
                username: username,
                comment: comment,
            })
            .then((res) => {
                setResponse(res.data);

                setUsername("");
                setComment("");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Add Comment</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/><br />
                <textarea placeholder="Write a comment..." value={comment} onChange={(e) => setComment(e.target.value)}/><br />
                <button type="submit">Submit Comment</button>
            </form>

            {response && (
                <div>
                    <h3>Response:</h3>
                    <p><strong>Username:</strong> {response.username}</p>
                    <p><strong>Comment:</strong> {response.comment}</p>
                    <p><strong>ID:</strong> {response.id}</p>
                </div>
            )}
        </div>
    );
}

export default AddComment