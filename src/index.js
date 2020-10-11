
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import user from './data/userInfo'

const rootElement = document.getElementById('root')
ReactDOM.render(<App user={user} />, rootElement)
