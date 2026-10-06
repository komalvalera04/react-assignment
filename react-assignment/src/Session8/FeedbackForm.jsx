/* 4. Refactor an existing React form (for example, a feedback form with name and message fields) to use controlled components for both inputs, and add a button that, when clicked, focuses the message input using useRef. */


import { useRef, useState } from 'react'

function FeedbackForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const messageRef = useRef(null);
    const handleFocus = () => {messageRef.current.focus();};

    return (
        <div>
            <h2>Feedback Form</h2>

            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <br /><br />

            <textarea ref={messageRef} placeholder="Enter your feedback" value={message} onChange={(e) => setMessage (e.target.value)}/><br /><br />

            <button onClick={handleFocus}>Focus Message</button>
        </div>
    );
}

export default FeedbackForm