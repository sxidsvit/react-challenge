// // index.js
// import React from 'react'
// import ReactDOM from 'react-dom'
// import asabenehImage from './images/asabeneh.jpg'


// // To get the root element from the HTML document
// const rootElement = document.querySelector('#root')
// // JSX element, header
// const welcome = 'Welcome to 30 Days Of React Challenge'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
// }
// const date = 'Oct 2, 2020'

// // JSX element, header
// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>
//         Instructor: {author.firstName} {author.lastName}
//       </p>
//       <small>Date: {date}</small>
//     </div>
//   </header>
// )

// const numOne = 3
// const numTwo = 2

// const result = (
//   <p>
//     {numOne} + {numTwo} = {numOne + numTwo}
//   </p>
// )

// const yearBorn = 1820
// const currentYear = 2020
// const age = currentYear - yearBorn
// const personAge = (
//   <p>
//     {' '}
//     {author.firstName} {author.lastName} is {age} years old
//   </p>
// )

// // User Card Component
// const UserCard = () => (
//   <div className='user-card'>
//     <img src={asabenehImage} alt='asabeneh image' />
//     <h2>
//       {author.firstName} {author.lastName}
//     </h2>
//   </div>
// )

// // JSX element, main
// const techs = ['HTML', 'CSS', 'JavaScript']
// const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// // JSX element, main
// const Main = () => (
//   <main>
//     <div className='main-wrapper'>
//       <div>
//         <p>
//           Prerequisite to get started{' '}
//           <strong>
//             <em>react.js</em>
//           </strong>
//           :
//         </p>
//         <ul>{techsFormatted}</ul>
//         {result}
//         {personAge}
//       </div>
//       <UserCard />
//     </div>
//   </main>
// )

// const copyRight = '2020'

// // JSX element, footer
// const Footer = () => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright &copy;{copyRight}</p>
//     </div>
//   </footer>
// )

// // JSX element, app
// const App = () => (
//   <div className='app'>
//     <Header />
//     <Main />
//     <Footer />
//   </div>
// )

// // we render the App component using the ReactDOM package
// ReactDOM.render(<App />, rootElement)


//  =================================================================

// Hexadecimal color generator
// const hexaColor = () => {
//   let str = '0123456789abcdef'
//   let color = ''
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length)
//     color += str[index]
//   }
//   return '#' + color
// }

// const HexaColor = () => <div>{hexaColor()}</div>
// ReactDOM.render(<HexaColor />, rootElement)



//  =============== The theory examples ==============================

//  (1) 

// import React from 'react'
// import ReactDOM from 'react-dom'

// const welcome = 'Welcome to 30 Days Of React Challenge'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
// }
// const date = 'Oct 2, 2020'


// // Header Component
// const Header = (props) => {
//   console.log('props: ', props);
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {author.firstName} {author.lastName}
//         </p>
//         <small>{date}</small>
//       </div>
//     </header>
//   )
// }

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   return (
//     <div className='app'>
//       <Header />
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')

// ReactDOM.render(<App />, rootElement)

//  (2) 

// Header Component

// import React from 'react'
// import ReactDOM from 'react-dom'

// const Header = (props) => {
//   console.log(props) // {welcome:'Welcome to 30 Days Of React'}
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{props.welcome}</h1>
//       </div>
//     </header>
//   )
// }

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   return (
//     <div className='app'>
//       <Header welcome='Welcome to 30 Days Of React' />
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')

// ReactDOM.render(<App />, rootElement)

//  (3) 

// import React from 'react'
// import ReactDOM from 'react-dom'

// // Header Component
// const Header = (props) => {
//   console.log(props)
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{props.welcome}</h1>
//         <h2>{props.title}</h2>
//         <h3>{props.subtitle}</h3>
//         <p>
//           {props.firstName} {props.lastName}
//         </p>
//         <small>{props.date}</small>
//       </div>
//     </header>
//   )
// }

// // The App, or the parent or the container component
// // Functional Component
// const App = () => (
//   <div className='app'>
//     <Header
//       welcome='Welcome to 30 Days Of React'
//       title='Getting Started React'
//       subtitle='JavaScript Library'
//       firstName='Asabeneh'
//       lastName='Yetayeh'
//       date='Oct 4, 2020'
//     />
//   </div>
// )

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

//  (4) 

// import React from 'react'
// import ReactDOM from 'react-dom'

// // Header Component
// const Header = (props) => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>{props.welcome}</h1>
//       <h2>{props.title}</h2>
//       <h3>{props.subtitle}</h3>
//       <p>
//         {props.firstName} {props.lastName}
//       </p>
//       <small>{props.date}</small>
//     </div>
//   </header>
// )

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const welcome = 'Welcome to 30 Days Of React'
//   const title = 'Getting Started React'
//   const subtitle = 'JavaScript Library'
//   const firstName = 'Asabeneh'
//   const lastName = 'Yetayeh'
//   const date = 'Oct 4, 2020'

//   return (
//     <div className='app'>
//       <Header
//         welcome={welcome}
//         title={title}
//         subtitle={subtitle}
//         firstName={firstName}
//         lastName={lastName}
//         date={date}
//       />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// ------ Number props type ---

// import React from 'react'
// import ReactDOM from 'react-dom'

// const Age = (props) => <div>The person is {props.age} years old.</div>
// const Weight = (props) => (
//   <p>The weight of the object on earth is {props.weight} N.</p>
// )

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   let currentYear = 2020
//   let birthYear = 1820
//   const age = currentYear - birthYear
//   const gravity = 9.81
//   const mass = 75

//   return (
//     <div className='app'>
//       <Age age={age} />
//       <Weight weight={gravity * mass} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)


// Array props type

// import React from 'react'
// import ReactDOM from 'react-dom'

// // Skills Component
// const Skills = (props) => {
//   // modifying the skills array
//   const skillList = props.skills.map((skill, i) => <li key={i}>{skill}</li>)
//   return <ul>{skillList}</ul>
// }

// const App = () => (
//   <div className='app'>
//     <Skills skills={['HTML', 'CSS', 'JavaScript']} />
//   </div>
// )

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)


// Object props type

// import React from 'react'
// import ReactDOM from 'react-dom'

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return ` ${month} ${date}, ${year}`
// }
// // Header Component
// const Header = (props) => {
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{props.data.welcome}</h1>
//         <h2>{props.data.title}</h2>
//         <h3>{props.data.subtitle}</h3>
//         <p>
//           {props.data.author.firstName} {props.data.author.lastName}
//         </p>
//         <small>{showDate(props.data.date)}</small>
//       </div>
//     </header>
//   )
// }

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh',
//     },
//     date: new Date(), // date needs to be formatted to a human readable format
//   }

//   return (
//     <div className='app'>
//       <Header data={data} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// Function prop types

// import React from 'react'
// import ReactDOM from 'react-dom'

// // A button component

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const sayHi = () => {
//     alert('Hi')
//   }

//   return (
//     <div className='app'>
//       <Button text='Say Hi' onClick={sayHi} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// // we render the JSX element using the ReactDOM package
// ReactDOM.render(<App />, rootElement)


// import React from 'react'
// import ReactDOM from 'react-dom'

// // A button component

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const greetPeople = () => {
//     alert('Welcome to 30 Days Of React Challenge, 2020')
//   }

//   return (
//     <div className='app'>
//       <Button text='Greet People' onClick={greetPeople} />
//       <Button text='Show Time' onClick={() => alert(new Date().getMounth())} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// import React from 'react'
// import ReactDOM from 'react-dom'

// // Function to display time in Mon date, year format eg Oct 4, 2020
// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return ` ${month} ${date}, ${year}`
// }

// // A button component

// const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const handleTime = () => {
//     alert(showDate(new Date()))
//   }
//   const greetPeople = () => {
//     alert('Welcome to 30 Days Of React Challenge, 2020')
//   }
//   return (
//     <div className='app'>
//       <Button text='show time' onClick={handleTime} />
//       <Button text='Greet People' onClick={greetPeople} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)


// Destructuring props

// (1) Step by step destructuring

// import React from 'react'
// import ReactDOM from 'react-dom'

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return ` ${month} ${date}, ${year}`
// }
// // Header Component
// const Header = ({data}) => {
//   // const data = props.data
//   const { welcome, title, subtitle, author:{ firstName, lastName } , date } = data
//   // const { firstName, lastName } = author
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )
// }

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh',
//     },
//     date: new Date(),
//   }

//   return (
//     <div className='app'>
//       <Header data={data} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// // we render the JSX element using the ReactDOM package
// ReactDOM.render(<App />, rootElement)

// (3) Destructuring the props inside the parenthesis

// import React from 'react'
// import ReactDOM from 'react-dom'

// const showDate = (time) => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const month = months[time.getMonth()].slice(0, 3)
//   const year = time.getFullYear()
//   const date = time.getDate()
//   return ` ${month} ${date}, ${year}`
// }
// // Header Component
// const Header = ({
//   data: {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   },
// }) => {
//   return (
//     <header>
//       <div className='header-wrapper'>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//         <p>
//           {firstName} {lastName}
//         </p>
//         <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )
// }

// // The App, or the parent or the container component
// // Functional Component
// const App = () => {
//   const data = {
//     welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library',
//     author: {
//       firstName: 'Asabeneh',
//       lastName: 'Yetayeh',
//     },
//     date: new Date(),
//   }

//   return (
//     <div className='app'>
//       <Header data={data} />
//     </div>
//   )
// }
// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)


// Now, let's destructure all the components we had and assemble them together

import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

// Fuction to show month date year

const showDate = (time) => {
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

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

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

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
