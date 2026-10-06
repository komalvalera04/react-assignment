/* 1. Create a simple React component called TrendingSongs that uses fetch() to get data from https://jsonplaceholder.typicode.com/posts and displays the first 3 titles. If the API call fails, show a message 'Error loading data' instead of the list. 

2. Modify your TrendingSongs component to include a 'Reload' button that retries the API call when clicked, and keeps showing the error message if the fetch still fails.<br><br><em><strong>Hint:</strong> Use try/catch inside an async function and update state to trigger a re-render.</em>
*/


import React, { useEffect, useState } from 'react'

function TrendingSongs() {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(false);

    const fetchSongs = async () => {
        try {
            setError(false);

            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {throw new Error("Failed to fetch data");}

            const data = await response.json();
            setSongs(data.slice(0, 3));
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div>
            <h2>Trending Songs</h2>

            {error ? (
                <div>
                    <p>Error loading data</p>

                    <button onClick={fetchSongs}>Reload</button>
                </div>
            ) : (
                <ul>
                    {songs.map((song) => (
                        <li key={song.id}>{song.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TrendingSongs