import React from 'react'
import './style.css'

const TwitCard = ({ twit: { id, firstName, lastName = '', nik = '', postContent, date }, deleteHandler }) => {

  return (
    <>
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
            <i className="far fa-edit"></i>
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
