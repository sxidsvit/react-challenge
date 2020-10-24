import React from 'react'
import './styles.css'

import Header from './components/Header/Header'
import Main from './components/Main'
import Footer from './components/Footer/Footer'


// class based component
class App extends React.Component {

  state = {
    count: 0,
    styles: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
    },
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }

  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  changeBackground = () => {
    const morningStyle = { backgroundColor: '#FFFFFF', color: '#000000', }
    const eveningStyle = { backgroundColor: '#000000', color: '#FFFFFF', }
    const styles = this.state.styles.backgroundColor === morningStyle.backgroundColor ? eveningStyle : morningStyle
    this.setState({ styles })
    console.log('this.state.styles: ', this.state.styles);
  }

  render() {

    const { data, techs, photo } = this.props.user
    const user = { ...data.author, image: photo }

    return (
      <div className='app' style={this.state.styles}>
        <Header data={data} style={this.state.styles} />
        <Main
          style={this.state.styles}
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} style={this.state.styles} />
      </div>
    )
  }
}

export default App