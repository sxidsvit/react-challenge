import React, { useState } from 'react'
import TwitEditing from '../TwitEditing/TwitEditing'
import './style.css'

const TwitCard = ({ twit: { id, firstName, lastName = '', nik = '', postContent, date }, twitts, setTwitts }) => {

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
    <>
      {editing
        && <TwitEditing
          currentTwit={currentTwit}
          updateHandler={updateHandler}
          cancelHandler={cancelHandler}
        />}

      <div className="post">
        <div className="user-info">
          <i className="fas fa-user"></i>
          <h4>{firstName + ' ' + lastName}
            &nbsp;{nik ? <span>@{nik}</span> : ''}
          </h4>
        </div>
        <div className="post-text">
          <p>{postContent} </p>
        </div>
        <div className="post-detail">
          <div>
            <i className="far fa-edit"
              onClick={editHandler(id)}
            ></i>
            <i className="far fa-trash-alt"
              onClick={deleteHandler(id)}
            ></i>
          </div>
          <div className="post-activity">
            <i className="far fa-comment"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-retweet"></i>
          </div>
          <div>
            <small className="tweeted-date">{date}</small>
          </div>
        </div>
      </div>
    </>
  )
}

export default TwitCard
