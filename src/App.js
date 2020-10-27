import React, { useRef } from 'react'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    ref.current.focus()
  }
  return (
    <div className='App'>
      <h1>How to focus on input element useRef</h1>
      <input type='text' ref={ref} />
      <br />
      <button onClick={onClick}>Click to Focus on input</button>
    </div>
  )
}

export default App
