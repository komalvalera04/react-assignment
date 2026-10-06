/* 2. Build a simple login form with two controlled input fields (username and password) using useState. After the user clicks the 'Login' button, use useRef to clear and focus the username field. */


import { useRef, useState } from 'react'

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const usernameRef = useRef(null);
    const handleLogin = (e) => {
        e.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`);
        setUsername("");
        setPassword("");
        usernameRef.current.focus();
    };

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleLogin}>
                <input ref={usernameRef} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/><br /><br />

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm