import React, { useState, useRef } from 'react'
import './style.css'

const AddPost = ({ addTwitHandler }) => {

  const [value, setValue] = useState('')
  const buttonRef = useRef()

  const changeHandler = (e) => {

    const currentValue = e.target.value
    setValue(currentValue)
    if (currentValue) {
      buttonRef.current.classList.remove('disabledButton')
      buttonRef.current.classList.add('activeButton')
      buttonRef.current.disabled = false
    }
    else {
      buttonRef.current.classList.remove('activeButton')
      buttonRef.current.classList.add('disabledButton')
      buttonRef.current.disabled = true
    }
  }

  return (
    <form onSubmit={addTwitHandler(value)}>
      <div>
        <div className="form-group">
          <textarea
            name="Post"
            placeholder="Tweet about 30 Days Of React ..."
            cols="80"
            rows="10"
            value={value}
            onChange={(e) => changeHandler(e)}
          >
          </textarea>
        </div>
        <p className="other">{250 - value.length}</p>
      </div>
      <div>
        <button
          type="submit"
          ref={buttonRef}
          className="disabledButton"
          disabled
        // onClick={addTwitHandler(value)}
        >
          Add Twit</button>
      </div>
    </form >
  )
}

export default AddPost
