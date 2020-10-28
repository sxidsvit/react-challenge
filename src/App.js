import React, { useState } from 'react'
import TwitCard from './components/TwitCard/TwitCard'
// import { formatedData, generateId } from './utils'
import './style.css'
import { data } from './data'


const App = () => {
  const [twitts, setTwitts] = useState(data)

  const deleteHandler = (id) => () => {
    setTwitts(twitts.filter(twit => twit.id !== id))
  }

  return (
    <div className="tweet-wrapper">
      {
        twitts.map(twit =>
          <TwitCard twit={twit}
            key={twit.id}
            deleteHandler={deleteHandler}
          />)
      }
    </div>
  )
}

export default App
