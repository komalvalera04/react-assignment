/* 1. Create a React component called TrendingSongs that uses the useEffect hook to log 'Component mounted' in the console when the component first renders. */


import { useEffect } from 'react'

function TrendingSongs() {
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    return (
        <div>
            <h2>Trending Songs</h2>
            <p>Check the console.</p><br/><br/>
        </div>
    );
}

export default TrendingSongs