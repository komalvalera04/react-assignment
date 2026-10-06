/* 1. Install Axios in your React project and use it to fetch a list of trending movies from the TMDB API (https://api.themoviedb.org/3/movie/popular) and display the first 5 movie titles in a component.<br><br><em><strong>Hint:</strong> You can sign up for a free API key at TMDB or use a mock API like https://jsonplaceholder.typicode.com/posts if you want to skip authentication.</em> 

4. Update your movie list component to handle loading and error states: show 'Loading...' while the Axios request is in progress and display an error message if the API call fails.<br><br><em><strong>Hint:</strong> Use useState to track loading and error states.</em>
*/


import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MovieList() {
    const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setMovies(response.data.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to fetch movies.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Popular Movies</h2>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList