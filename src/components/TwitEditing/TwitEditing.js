import React, { useState } from 'react'
import './style.css'

const TwitEditing = ({ currentTwit: { id, postContent }, updateHandler, cancelHandler }) => {

  const [value, setValue] = useState(postContent)


  return (
    <div className="twit-editing-wrapper">
      <textarea spellCheck="false"
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
      >
      </textarea>
      <br />
      <button className="save-button"
        onClick={updateHandler(value, id)}
      >Save</button>
      <button className="cancel-button"
        onClick={cancelHandler}
      >Cancel</button>
    </div>
  )
}

export default TwitEditing
