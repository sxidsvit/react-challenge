import React from 'react'
import TwitCard from './components/TwitCard/TwitCard'
import { formatedData } from './utils'
import './style.css'

const App = () => {

  const post = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    nik: "Asabeneh",
    postContent: "I have no idea about the coming challenge. It could be 30 days of HTML &amp;  CSS, ReactNative, Data Analysis or MERN.",
    date: formatedData()
  }

  return (
    <div className="tweet-wrapper">
      <TwitCard post={post} />
    </div>
  )
}

export default App
