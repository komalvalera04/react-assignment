/* 4. Given the following buggy code in a React useEffect hook:<br><br>`useEffect(() => { fetch('https://jsonplaceholder.typicode.com/invalidurl').then(res => res.json()).then(data => setData(data)).catch(err => setError(true)); }, []);`<br><br>Fix the code so that it correctly handles both network errors and non-200 HTTP status codes, showing an error message if either occurs.<br><br><em><strong>Hint:</strong> Use try/catch and check response.ok.</em> */


import React, { useEffect, useState } from 'react'

function FetchData() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/invalidurl"
                );

                if (!response.ok) {
                    throw new Error("HTTP error");
                }

                const result = await response.json();

                setData(result);
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Fetch Data</h2>

            {error ? (
                <p>Error loading data</p>
            ) : (
                <p>Data loaded successfully</p>
            )}
        </div>
    );
}

export default FetchData