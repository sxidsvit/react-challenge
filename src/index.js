// import React from 'react'
// import ReactDOM from 'react-dom'
// // Header Component
// // Functional component
// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Asabeneh Yetayeh</p>
//       <small>Oct 6, 2020</small>
//     </div>
//   </header>
// )
// const rootElement = document.getElementById('root')
// ReactDOM.render(<Header />, rootElement)

//  ************************************************************

// import React from 'react'
// import ReactDOM from 'react-dom'

// // class based component
// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>Welcome to 30 Days Of React</h1>
//           <h2>Getting Started React</h2>
//           <h3>JavaScript Library</h3>
//           <p>Asabeneh Yetayeh</p>
//           <small>Oct 7, 2020</small>
//         </div>
//       </header>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Header />, rootElement)

//  ***************************************************************************

// import React from 'react'
// import ReactDOM from 'react-dom'

// // class base component
// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     // the code inside the constructor run before any other code
//   }
//   render() {
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>Welcome to 30 Days Of React</h1>
//           <h2>Getting Started React</h2>
//           <h3>JavaScript Library</h3>
//           <p>Asabeneh Yetayeh</p>
//           <small>Oct 7, 2020</small>
//         </div>
//       </header>
//     )
//   }
// }

// // TechList Component
// // class base component
// class TechList extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const techs = ['HTML', 'CSS', 'JavaScript']
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techsFormatted
//   }
// }

// // Main Component
// // Class Component
// class Main extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <main>
//         <div className='main-wrapper'>
//           <p>Prerequisite to get started react.js:</p>
//           <ul>
//             <TechList />
//           </ul>
//         </div>
//       </main>
//     )
//   }
// }

// // Footer Component
// // Class component
// class Footer extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <footer>
//         <div className='footer-wrapper'>
//           <p>Copyright 2020</p>
//         </div>
//       </footer>
//     )
//   }
// }

// // The App, or the parent or the container component
// // Class Component
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div className='app'>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// ****************************************************************************

// import React from 'react'
// import ReactDOM from 'react-dom'

// // class based component
// class Header extends React.Component {

//   render() {
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>{this.props.data.welcome}</h1>
//           <h2>{this.props.data.title}</h2>
//           <h3>
//             {this.props.data.author.firstName} {this.props.data.author.lastName}
//           </h3>
//           <small>{this.props.data.date}</small>
//         </div>
//       </header>
//     )
//   }
// }
// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh',
//     },
//     date: 'Oct 7, 2020',
//   }

//   return (
//     <div className='app'>
//       <Header data={data} />
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// ****************************************************************************

// import React from 'react'
// import ReactDOM from 'react-dom'

// // class based component
// class Header extends React.Component {
//   // constructor(props) {
//   //   super(props)
//   //   // the code inside the constructor run before any other code
//   // }

//   render() {
//     console.log(this.props.data)
//     const {
//       welcome,
//       title,
//       subtitle,
//       author: { firstName, lastName },
//       date,
//     } = this.props.data

//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>{welcome}</h1>
//           <h2>{title}</h2>
//           <h3>{subtitle}</h3>
//           <p>
//             {firstName} {lastName}
//           </p>
//           <small>{date}</small>
//         </div>
//       </header>
//     )
//   }
// }
// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh',
//     },
//     date: 'Oct 6, 2020',
//   }

//   return (
//     <div className='app'>
//       <Header data={data} />
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// ****************************************************************************

// import React from 'react'
// import ReactDOM from 'react-dom'

// // class based component
// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     // the code inside the constructor run before any other code
//   }
//   render() {
//     console.log(this.props.data)
//     const {
//       welcome,
//       title,
//       subtitle,
//       author: { firstName, lastName },
//       date,
//     } = this.props.data

//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>{welcome}</h1>
//           <h2>{title}</h2>
//           <h3>{subtitle}</h3>
//           <p>
//             {firstName} {lastName}
//           </p>
//           <small>{date}</small>
//         </div>
//       </header>
//     )
//   }
// }

// // TechList Component
// // class base component
// class TechList extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const { techs } = this.props
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techsFormatted
//   }
// }

// // Main Component
// // Class Component
// class Main extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <main>
//         <div className='main-wrapper'>
//           <p>Prerequisite to get started react.js:</p>
//           <ul>
//             <TechList techs={this.props.techs} />
//           </ul>
//         </div>
//       </main>
//     )
//   }
// }

// // Footer Component
// // Class component
// class Footer extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <footer>
//         <div className='footer-wrapper'>
//           <p>Copyright {this.props.date.getFullYear()}</p>
//         </div>
//       </footer>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     const data = {
//       welcome: 'Welcome to 30 Days Of React',
//       title: 'Getting Started React',
//       subtitle: 'JavaScript Library',
//       author: {
//         firstName: 'Asabeneh',
//         lastName: 'Yetayeh',
//       },
//       date: 'Oct 7, 2020',
//     }
//     const techs = ['HTML', 'CSS', 'JavaScript']

//     return (
//       <div className='app'>
//         <Header data={data} />
//         <Main techs={techs} />
//         <Footer date={new Date()} />
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)


// ************* Methods in Class based component ***************************

// import React from 'react'
// import ReactDOM from 'react-dom'

// // class based component
// class Header extends React.Component {
//   greetPeople = () => {
//     alert('Welcome to 30 Days Of React Challenge, 2020')
//   }
//   render() {
//     return (
//       <header>
//         <div className='header-wrapper'>
//           <h1>Welcome to 30 Days Of React</h1>
//           <h2>Getting Started React</h2>
//           <h3>JavaScript Library</h3>
//           <p>Asabeneh Yetayeh</p>
//           <small>Oct 7, 2020</small>
//           <button onClick={this.greetPeople}> Greet </button>
//         </div>
//       </header>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Header />, rootElement)

// ****************************************************************************

import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

// Fuction to show month date year

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
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

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header>
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

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    const { techs, user, greetPeople, handleTime } = this.props


    return (
      <main>
        <div className='main-wrapper'>
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
          <Button
            text='Show Time'
            onClick={handleTime}
            style={buttonStyles}
          />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  showDate = (time) => {
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
    return ` ${month} ${date}, ${year}`
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
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
      <div className='app'>
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
        />
        <Footer date={new Date()} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// ****************************************************************************
