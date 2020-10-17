import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Home component
const Home = () => (<h1>Welcome Home</h1>)
// About component
const About = () => (<h1>About Us</h1>)
// Contact component
const Contact = () => (<h1>Contact us</h1>)
// Challenge component
const Challenges = () => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <h1> Hello !!!</h1>
        <Route exact path='/' component={Home} />
        <Route exact strict path='/about' component={About} />
        <Route exact strict path='/contact' component={Contact} />
        <Route exact strict path='/challenges' component={Challenges} />
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
console.log('rootElement: ', rootElement);
ReactDOM.render(<App />, rootElement)