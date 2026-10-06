/* 2. Build a UserProfile component that takes username, followers, and profilePic as props and renders a mini Instagram-style profile card. 

3. Set up default props for your UserProfile component so that if followers or profilePic is not provided, it shows 0 followers and a default image URL.<br><br><em><strong>Hint:</strong> Use the defaultProps property to set fallback values.</em>

*/

import React from 'react'

function UserProfile({ username,followers = 0,profilePic = "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg", }) {
    return (
        <div style={{ width: "300px", padding: "20px", margin: "20px", border: "1px solid #ddd", borderRadius: "12px", textAlign: "center", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", }}>
            <img src={profilePic} alt="" width="100" height="100" style={{ borderRadius: "50%", objectFit: "cover", }} />

            <h2>@{username}</h2>

            <p><strong>{followers}</strong> Followers</p>
        </div>
    );
}
export default UserProfile