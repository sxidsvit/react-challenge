import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

// Fuction to show month date year

class ShowDate extends React.Component {

  render() {
    const { time } = this.props
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()

    return (` ${month} ${date}, ${year}`)
  }
}

// User Card Component
class UserCard extends React.Component {

  render() {
    const { user: { firstName, lastName, image } } = this.props

    return (
      <div className='user-card'>
        <img src={image} alt={firstName} />
        <h2>
          {firstName}
          {lastName}
        </h2>
      </div>
    )
  }
}

// A button component
class Button extends React.Component {

  render() {
    const { text, onClick, style } = this.props
    return (
      <button style={style} onClick={onClick}>
        {text}
      </button>
    )
  }
}

// class based component
class Header extends React.Component {

  render() {
    const { style } = this.props
    console.log('Header style: ', style);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={style}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class Count extends React.Component {

  render() {
    const { count, addOne, minusOne } = this.props
    const buttonStyles = {
      backgroundColor: '#61dbfb',
      padding: 10,
      border: 'none',
      borderRadius: 5,
      margin: 3,
      cursor: 'pointer',
      fontSize: 18,
      color: 'white',
    }

    return (
      <div >
        <h1>{count} </h1>
        <div>
          <Button text='+1' onClick={addOne} style={buttonStyles} />
          <Button text='-1' onClick={minusOne} style={buttonStyles} />
        </div>
      </div>
    )
  }
}

// TechList Component
// class base component
class TechList extends React.Component {

  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {

  render() {

    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props

    const buttonStyles = {
      backgroundColor: '#61dbfb',
      padding: 10,
      border: 'none',
      borderRadius: 5,
      margin: 3,
      cursor: 'pointer',
      fontSize: 18,
      color: 'white',
    }

    return (
      <main>
        <div className='main-wrapper' style={this.props.style}>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {

  render() {
    const { style, date } = this.props
    return (
      <footer style={style}>
        <div className='footer-wrapper' >
          <p>Copyright {date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

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
  handleTime = () => {
    // alert(this.showDate(new Date()))
    alert(<ShowDate time={(new Date())} />)
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  changeBackground = () => {
    const morningStyle = { backgroundColor: '#FFFFFF', color: '#000000', }
    const eveningStyle = { backgroundColor: '#000000', color: '#FFFFFF', }
    // const morningStyle = {backgroundColor: '#E4CA7C', color: '#4E3D36', }
    // const eveningStyle = {backgroundColor: '#4E3D36', color: '#E4CA7C', }
    const styles = this.state.styles.backgroundColor === morningStyle.backgroundColor ? eveningStyle : morningStyle
    this.setState({ styles })
    console.log('this.state.styles: ', this.state.styles);
  }

  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']

    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage }

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

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
