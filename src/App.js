import React, { useRef } from 'react'

const App = (props) => {
  const ref = useRef(null)
  const onClick = () => {
    let content = ref.current.textContent
    alert(content)
    console.log(content)
  }
  return (
    <div className='App'>
      <h1 ref={ref}>How to getting content from the DOM tree</h1>
      <button onClick={onClick}>Getting Content</button>
    </div>
  )
}

export default App
