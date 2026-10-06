/* 4. Build a PlaylistAdder component for a Spotify-style app: allow the user to enter a song name and artist, and when the form is submitted, add the song to a displayed list below the form. */


import { useState } from "react";

function PlaylistAdder() {
    const [songName, setSongName] = useState("");
    const [artist, setArtist] = useState("");
    const [songs, setSongs] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (songName.trim() === "" || artist.trim() === "") {
            return;
        }

        const newSong = {
            id: Date.now(),
            name: songName,
            artist: artist,
        };

        setSongs([...songs, newSong]);

        setSongName("");
        setArtist("");
    };

    return (
        <div>
            <h2>My Playlist</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Song name" value={songName} onChange={(e) => setSongName(e.target.value)} />
                <input type="text" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
                <button type="submit">Add Song</button>
            </form>

            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        {song.name} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlaylistAdder;
