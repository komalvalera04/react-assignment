/* 2. Build a React component called IPLScoreFetcher that uses useEffect to fetch live match data from https://jsonplaceholder.typicode.com/posts when the component mounts, and display the title of the first post as the current 'match headline'. 
4. Refactor an existing React component that fetches data in a button click handler to instead use useEffect so the data is fetched automatically when the component mounts, not on button click.<br><br><em><strong>Constraint:</strong> Only move the fetch logic; do not change the UI or styling.</em>
*/


import { useEffect, useState } from "react";

function IPLScoreFetcher() {
    const [headline, setHeadline] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setHeadline(data[0].title);
            })
            .catch((error) => {
                console.error("Error fetching match data:", error);
            });
    }, []);

    return (
        <div>
            <h2>Current Match Headline</h2>
            <p>{headline || "Loading..."}</p><br/><br/>
        </div>
    );
}

export default IPLScoreFetcher;
