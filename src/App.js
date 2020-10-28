import React from 'react'
import TwitCard from './components/TwitCard/TwitCard'
// import { formatedData, generateId } from './utils'
import './style.css'
import { twitts } from './data'

console.log('twitts: ', twitts);

const App = () => {

  return (
    <div className="tweet-wrapper">
      {
        twitts.map(twit =>
          <TwitCard twit={twit}
            key={twit.id}
          />)
      }
    </div>
  )
}

export default App
