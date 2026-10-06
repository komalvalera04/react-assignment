/* Session 12 – Error Handling  Topics to Cover:  Try/catch in API calls. Demo: Display “Error loading data” message. */


import React from 'react'
import TrendingSongs from './TrendingSongs'
import IPLScores from './IPLScores'
import FetchData from './FetchData'

function Session12() {
  return (
    <div>
        <TrendingSongs/><br/><br/>
        <IPLScores/><br/><br/>
        <FetchData/>
    </div>
  )
}

export default Session12