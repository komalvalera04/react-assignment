/* 4. Build a MiniProfile functional component that shows a user's display picture (use any image URL), name, and a short status message using JSX. Use this component to display your own mini profile like Instagram.  */

import React from 'react'

function MiniProfile({imgUrl, name, status}) {
  return (
    <div>
        <img src={imgUrl} alt="" width="200px" />
        <h2>{name}</h2>
        <p>{status}</p>
    </div>
  )
}

export default MiniProfile