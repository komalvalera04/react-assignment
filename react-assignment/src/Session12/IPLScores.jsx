/* 3. Build a React component called IPLScores that fetches and displays dummy cricket scores from a mock API endpoint (use https://jsonplaceholder.typicode.com/users). If the response status is not 200, throw an error and display 'Error loading scores'. */


import React, { useEffect, useState } from 'react'

function IPLScores() {
    const [scores, setScores] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (response.status !== 200) {
                    throw new Error("Failed to fetch scores");
                }

                const data = await response.json();

                setScores(data);
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };

        fetchScores();
    }, []);

    if (error) {
        return <h2>Error loading scores</h2>;
    }

    return (
        <div>
            <h2>IPL Scores</h2>

            <ul>
                {scores.map((score) => (
                    <li key={score.id}>
                        {score.name} - Score: {score.id * 20}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IPLScores