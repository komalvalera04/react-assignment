/* 1. Create a React component called SearchBar with an input field and a button. Use useRef to focus the input field automatically when the component mounts. */


import {useEffect, useRef} from 'react'

function SearchBar() {
  const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h3>Searchbar</h3>
            <input ref={inputRef} type="text" placeholder="Search products"/>
            <button>Search</button><br/><br/><br/>
        </div>
    );
}

export default SearchBar