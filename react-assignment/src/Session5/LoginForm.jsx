/* 3. Create a simple LoginForm component with two input fields: username and password. When the form is submitted, display an alert with the entered username and password.<br><br><em><strong>Hint:</strong> Use the onSubmit event on the form and prevent the default page reload.</em> 

5.Refactor your LoginForm to clear the input fields after successful form submission.<br><br><em><strong>Constraint:</strong> Do not reload the page or use window.location.</em>
*/


import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Username: ${username}\nPassword: ${password}`);

        // Clear input fields
        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <br />

                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <br />

                <button type="submit">Login</button>
            </form><br/><br/>
        </div>
    );
}

export default LoginForm