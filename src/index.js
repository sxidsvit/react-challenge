
// ==== Mapping array of arrays ====

// import React from 'react'
// import ReactDOM from 'react-dom'

// const skills = [
//   ['HTML', 10],
//   ['CSS', 7],
//   ['JavaScript', 9],
//   ['React', 8],
// ]

// // Skill Component
// const Skill = ({ skill: [tech, level] }) => (
//   <li>
//     {tech} {level}
//   </li>
// )

// // Skills Component
// const Skills = ({ skills }) => {
//   const skillsList = skills.map((skill) => <Skill skill={skill} />)
//   console.log(skillsList)
//   return <ul>{skillsList}</ul>
// }

// const App = () => {
//   return (
//     <div className='container'>
//       <div>
//         <h1>Skills Level</h1>
//         <Skills skills={skills} />
//       </div>
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// ==== Mapping array of objects ====

import React from 'react'
import ReactDOM from 'react-dom'

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h5>{name}</h5>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => <Country key={country.name} country={country} />)
  return <div>{countryList}</div>
}
// App component
const App = () => (
  <div className='container'>
    <div>
      <h3>Countries List</h3>
      <Countries countries={countries} />
    </div>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


//  ==== Key in mapping arrays ====

// import React from 'react'
// import ReactDOM from 'react-dom'

// const Numbers = ({ numbers }) => {
//   // modifying array to array of li JSX
//   const list = numbers.map((num) => <li key={num}>{num}</li>)
//   return list
// }

// const App = () => {
//   const numbers = [1, 2, 3, 4, 5]

//   return (
//     <div className='container'>
//       <div>
//         <h1>Numbers List</h1>
//         <ul>
//           <Numbers numbers={numbers} />
//         </ul>
//       </div>
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)