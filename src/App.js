import React, { useState } from 'react'
import TwitCard from './components/TwitCard/TwitCard'
import AddPost from './components/AddPost/AddPost'
import { data } from './data'
import { formatedData, generateId } from './utils'
import './style.css'

const App = () => {

  const [twitts, setTwitts] = useState(data)

  const addTwitHandler = (value) => () => {
    const newTwit =
    {
      id: generateId(),
      firstName: "Sergiy",
      lastName: "Antonyuk",
      nik: "sxidsvit",
      postContent: value,
      date: formatedData()
    }
    setTwitts(prev => [newTwit, ...prev])
  }

  return (
    <div className="tweet-wrapper">
      <AddPost addTwitHandler={addTwitHandler} />
      {
        twitts.length
          ? twitts.map(twit =>
            <TwitCard
              key={twit.id}
              twit={twit}
              twitts={twitts}
              setTwitts={setTwitts}
            />)
          : <p className="notwits">You have no tweets</p>
      }
    </div>
  )
}

export default App
