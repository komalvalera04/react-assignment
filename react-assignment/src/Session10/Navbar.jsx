/* Build a simple Navbar component that uses useContext to display the current username from UserContext. */

import React, { useContext } from 'react'
import UserContext from './UserContext';

function Navbar() {
    const user = useContext(UserContext);

    return (
        <nav>
            <h2>My React App</h2>

            <p>
                Welcome, {user.username}<br/>
                {user.loggedIn ? " Logged In" : " Logged Out"}
            </p>
        </nav>
    );
}

export default Navbar