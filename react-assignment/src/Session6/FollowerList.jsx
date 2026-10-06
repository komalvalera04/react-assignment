/* 3. In a React component called FollowerList, render a list of followers (array of usernames). If the array is empty, display 'No followers yet' instead of the list.<br><br><em><strong>Hint:</strong> Use a conditional check before mapping the array.</em> */


import React from 'react'

function FollowerList({ followers }) {
    if (followers.length === 0) {
        return <p>No followers yet</p>;
    }

    return (
        <div>
            <h2>Followers</h2>

            <ul>
                {followers.map((username, index) => (
                    <li key={index}>{username}</li>
                ))}
            </ul>
        </div>
    );
}

export default FollowerList