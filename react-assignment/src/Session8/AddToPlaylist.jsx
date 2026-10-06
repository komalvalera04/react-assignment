/* 3. Make a React component called AddToPlaylist where users can enter a song name and click 'Add'. After adding, use useRef to focus the input again so users can quickly add another song.<br><br><em><strong>Hint:</strong> Call inputRef.current.focus() after updating the playlist.</em> */


import { useRef, useState } from 'react'

function AddToPlaylist() {
    const [song, setSong] = useState("");
    const [playlist, setPlaylist] = useState([]);

    const inputRef = useRef(null);

    const handleAdd = () => {
        if (song.trim() === "") {
            return;
        }
        setPlaylist([...playlist, song]);
        setSong("");
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>My Playlist</h2>

            <input ref={inputRef} type="text" placeholder="Enter song name" value={song} onChange={(e) => setSong(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            <ul>{playlist.map((item, index) => (
                <li key={index}>{item}</li>
                ))}</ul>
        </div>
    );
}

export default AddToPlaylist