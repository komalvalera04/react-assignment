/* Create a MovieSuggestions component that fetches a list of movies from https://jsonplaceholder.typicode.com/users inside useEffect on mount, and displays the names in a list. Show a loading message while the data is being fetched.<br><br><em><strong>Hint:</strong> Use a loading state variable and update it once data is received.</em> */


import { useEffect, useState } from 'react'

function MovieSuggestions() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2>Loading movies...</h2>;
    }

    return (
        <div>
            <h2>Movie Suggestions</h2>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieSuggestions