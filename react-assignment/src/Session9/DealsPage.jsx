/* 2. Create three components: HomePage.js, DealsPage.js, and CartPage.js. Configure Routes in App.js so that visiting /, /deals, or /cart shows the correct component. */

import React from 'react'
import Session9 from './Session9'

function DealsPage() {
  return (
    <div>
        <Session9/>
        <h1>Deals Page</h1>
        <p>Check out the latest deals!</p>
    </div>
  )
}

export default DealsPage