/* eslint-disable space-before-function-paren */
// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// ================================================

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const App = () => {
  // declaring state
  const url =
    'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'

  const [image, setImage] = useState(url)

  const changeAnimal = () => {
    let dogURL =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    let catURL =
      'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    let result = image === catURL ? dogURL : catURL
    setImage(result)
  }

  return (
    <div className='App'>
      <h1>30 Days Of React</h1>
      <div className='animal'>
        <img src={image} alt='animal' />
      </div>

      <button onClick={changeAnimal} class='btn btn-add'>
        Change
      </button>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)