import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Child() {
    const {theme} = useContext(ThemeContext);
    return (
        <div>
            <h3>Child Component</h3>
            <p>Current theme: {theme}</p>
        </div>
    )
}

export default Child