/* Session 7 – useEffect HookTopics to Cover:Component lifecycle and side effects.Demo:Simulate API fetch on mount. */


import React from 'react'
import TrendingSongs from './TrendingSongs'
import IPLScoreFetcher from './IPLScoreFetcher'
import MovieSuggestions from './MovieSuggestions'

function Session7() {
  return (
    <div>
        <TrendingSongs/>
        <IPLScoreFetcher/>
        <MovieSuggestions/>
    </div>
  )
}

export default Session7