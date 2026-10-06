/* 1. Create a React component called Playlist that takes an array of song objects (with title and artist) as a prop and uses map() to render each song in an unordered list. */


import React from 'react'

function PlayList({songs}) {
    return (
        <div>
            <h2>My Playlist</h2>

            <ul>
                {songs.map((song, index) => (
                    <li key={index}>
                        {song.title} - {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PlayList