// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import html5Logo from './images/html_logo.png'
import css3Logo from './images/css_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'


const styles = {
  imgTech: {
    height: "200px",
    width: "auto"
  },
  tech: {
    backgroundColor: "#F0F1F7",
    padding: "2rem",
    margine: "1rem"
  },
  userCardBorder: {
    border: "1px solid #2ACFCF",
    borderRadius: "20px",
    padding: "1rem",
    margin: "1rem"
  },
  UserCardMark: {
    width: "10px",
    height: "10px",
    padding: "6px",
    borderRadius: "50%",
    backgroundColor: "#2ACFCF",
    color: "#fff"
  },
  userCardImg: {
    height: "150px",
    width: "auto",
    borderRadius: "50%",
    marginBottom: "0.5rem"
  },
  userSkill: {
    borderRadius: "5px",
    marginRight: "10px",
    marginBottom: "10px",
    border: "1px solid #2ACFCF",
    backgroundColor: "#2ACFCF",
    color: "#fff",
    padding: "5px"
  },
  subscribeBorder: {
    border: "1px solid #C2E6F4",
    backgroundColor: "#C2E6F4",
    borderRadius: "20px",
    padding: "1rem",
    margin: "1rem"
  },
  subscribeH1: {
    fontSize: "2rem",
    fontWeight: "300",
    letterSpacing: "0px"
  },
  subscribeButton: {
    backgroundColor: "#F37474",
    color: "#fff",
    padding: "0.5rem",
    width: "16rem",
    borderStyle: "none",
    borderRadius: "4px",
    borderColor: "#F37474",
    fontWeight: "300",
    marginTop: "1rem"
  },
  subscribeInput: {
    margin: "1rem",
    width: "30%",
    borderColor: "#C2E6F4",
    borderStyle: "none",
    borderRadius: "4px",
    padding: "0.5rem 2rem"
  }
}

const subscribe = (
  <div className="d-flex flex-column justify-content-center align-items-center"
    style={styles.subscribeBorder}>
    <h1 style={styles.subscribeH1}>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates</p>
    <div className="d-flex justify-content-around" >
      <input style={styles.subscribeInput} type="text" placeholder="First name" />
      <input style={styles.subscribeInput} type="text" placeholder="Lirst name" />
      <input style={styles.subscribeInput} type="text" placeholder="Email" />
    </div>
    <button style={styles.subscribeButton}>Subscribe</button>
  </div>
)

const frontEndTechnologies = (
  <div style={styles.tech} className="d-flex flex-column justify-content-center align-items-center">
    <h6 className="text-center  mb-4 font-weight-bold">Front End Technologies</h6>
    <div div style={{ display: "flex", flexDirection: "row" }}>
      <img style={styles.imgTech} src={html5Logo} alt="html5Logo" />
      <img style={styles.imgTech} src={css3Logo} alt="css3Logo" />
      <img style={styles.imgTech} src={jsLogo} alt="css3Logo" />
      <img style={styles.imgTech} src={reactLogo} alt="reactLogo" />
    </div>
  </div>
)

const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const techs = ['HTML', 'CSS', 'JavaScript', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'MySQL', 'GraphQL', 'Docker', 'Heroku', 'Git']
const techsFormatted = techs.map((tech, i) =>
  <span key={i} style={styles.userSkill} >{tech}</span>)

const userCard = (
  <div style={styles.userCardBorder}>
    <img style={styles.userCardImg} src={asabenehImage} alt="html5Logo" />
    <p><strong>{author.firstName}&nbsp;{author.lastName}</strong>&nbsp;
      <strong style={styles.UserCardMark}>&#10004;</strong>
    </p>
    <p>Senior Developer, Finland</p>
    <div className="d-flex flex-wrap">
      {techsFormatted}
    </div>
    <p>&#8986;&nbsp;Joined on Aug 30, 2020</p>
  </div>
)




// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'

const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      {frontEndTechnologies}
      {userCard}
      {subscribe}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)