/* 2. Create three components: HomePage.js, DealsPage.js, and CartPage.js. Configure Routes in App.js so that visiting /, /deals, or /cart shows the correct component. */

import React from 'react'
import Session9 from './Session9'

function CartPage() {
  return (
    <div>
        <Session9/>
        <h1>Cart Page</h1>
        <p>Your shopping cart is here.</p>
    </div>
  )
}

export default CartPage