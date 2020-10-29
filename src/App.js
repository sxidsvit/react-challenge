import React, { useEffect, useState } from 'react'
import AddPost from './components/AddPost/AddPost'
import TwitsList from './components/TwitsList/TwitsList'
import { formatedData, generateId, getLoacalStorage } from './utils'
import './style.css'

const App = () => {

  const [twitts, setTwitts] = useState(getLoacalStorage())

  useEffect(() => {
    getLoacalStorage()
  }, [])

  const addTwitHandler = (value) => () => {
    const newTwit =
    {
      id: generateId(),
      firstName: "Sergiy",
      lastName: "Antonyuk",
      nik: "sxidsvit",
      postContent: value.trim(),
      date: formatedData()
    }
    const newTwitts = [newTwit, ...twitts]
    localStorage.setItem('twitts', JSON.stringify(newTwitts))
    setTwitts(newTwitts)
  }

  return (
    <div className="tweet-wrapper">
      <AddPost addTwitHandler={addTwitHandler} />
      <TwitsList twitts={twitts} setTwitts={setTwitts} />
    </div>
  )
}

export default App
