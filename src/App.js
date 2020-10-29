import React, { useState } from 'react'
import TwitCard from './components/TwitCard/TwitCard'
import AddPost from './components/AddPost/AddPost'
import TwitEditing from './components/TwitEditing/TwitEditing'
import { data } from './data'
import { formatedData, generateId } from './utils'
import './style.css'

const App = () => {

  const [twitts, setTwitts] = useState('')
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

  const addTwitHandler = (value) => () => {
    console.log('value: ', value);
    const newTwit =
    {
      id: generateId(),
      firstName: "Sergiy",
      lastName: "Antonyuk",
      nik: "sxidsvit",
      postContent: value,
      date: formatedData()
    }
    // data.unshift(newTwit)
    setTwitts(prev => [newTwit, ...prev])
  }


  return (
    <div className="tweet-wrapper">

      <AddPost addTwitHandler={addTwitHandler} />

      {editing
        && <TwitEditing
          currentTwit={currentTwit}
          updateHandler={updateHandler}
          cancelHandler={cancelHandler}
        />}

      {
        twitts.length
          ? twitts.map(twit =>
            <TwitCard twit={twit}
              key={twit.id}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />)
          : <p className="notwits">You have no tweets</p>
      }
    </div>
  )
}

export default App
