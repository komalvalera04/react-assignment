/* 2. Build a SearchBar component where the user can type a product name (like Flipkart search). As the user types in the input box, display the current value below in real-time using React state. */


import { useState } from "react";

function SearchBar() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <input type="text" placeholder="Search for a product" value={search} onChange={(e) => setSearch(e.target.value)}/>

            <p>You are searching for: {search}</p><br/><br/>
        </div>
    );
}

export default SearchBar;
