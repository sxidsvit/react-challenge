import React, { useState } from 'react'
import TwitCard from './components/TwitCard/TwitCard'
// import { formatedData, generateId } from './utils'
import './style.css'
import { data } from './data'
import TwitEditing from './components/TwitEditing/TwitEditing'


const App = () => {

  const [twitts, setTwitts] = useState(data)
  const [currentTwit, setCurrentTwit] = useState('')
  const [editing, setEditing] = useState(false)

  const editHandler = (id) => () => {
    setCurrentTwit(twitts.filter(twit => twit.id === id)[0])
    setEditing(true)
  }

  const updateHandler = (value, id) => () => {
    currentTwit.postContent = value
    setEditing(false)
    setCurrentTwit('')
  }
  const cancelHandler = () => {
    setEditing(false)
    setCurrentTwit('')
  }

  const deleteHandler = (id) => () => {
    setTwitts(twitts.filter(twit => twit.id !== id))
  }

  return (
    <div className="tweet-wrapper">

      {editing
        && <TwitEditing
          currentTwit={currentTwit}
          updateHandler={updateHandler}
          cancelHandler={cancelHandler}
        />}

      {
        twitts.map(twit =>
          <TwitCard twit={twit}
            key={twit.id}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />)
      }
    </div>
  )
}

export default App
