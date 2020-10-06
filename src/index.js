// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import html5Logo from './images/html_logo.png'
import css3Logo from './images/css_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'

// FrontEndTechnologies


const techImages = [
  { imgLink: html5Logo, imgAltText: 'html5Logo' },
  { imgLink: css3Logo, imgAltText: 'css3Logo' },
  { imgLink: jsLogo, imgAltText: 'jsLogo' },
  { imgLink: reactLogo, imgAltText: 'reactLogo' }
]

const FrontEndTechnologies = ({ techImages }) => {
  // console.log('techImages: ', techImages);
  const styles = {
    imgTech: {
      height: "200px",
      width: "auto"
    },
    tech: {
      backgroundColor: "#F0F1F7",
      padding: "2rem",
      margine: "1rem"
    }
  }

  return (
    <div style={styles.tech} className="d-flex flex-column justify-content-center align-items-center">
      <h6 className="text-center  mb-4 font-weight-bold">Front End Technologies</h6>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {techImages.map((_, i) => (
          <img key={i} style={styles.imgTech} src={techImages[i].imgLink} alt={techImages[i].imgAltText} />
        ))}

      </div>
    </div>
  )
}

//  UserCard 

const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}

const styles = {
  userSkill: {
    borderRadius: "5px",
    marginRight: "10px",
    marginBottom: "10px",
    border: "1px solid #2ACFCF",
    backgroundColor: "#2ACFCF",
    color: "#fff",
    padding: "5px"
  }
}

const techs = ['HTML', 'CSS', 'JavaScript', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'MySQL', 'GraphQL', 'Docker', 'Heroku', 'Git']
const techsFormatted = techs.map((tech, i) =>
  <span key={i} style={styles.userSkill} >{tech}</span>)

const UserCard = () => {
  const styles = {
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
    }
  }

  return (
    <div style={styles.userCardBorder}>
      <img style={styles.userCardImg} src={asabenehImage} alt="html5Logo" />
      <p><strong>{author.firstName}&nbsp;{author.lastName}</strong>&nbsp;
      <strong style={styles.UserCardMark}>&#10004;</strong>
      </p>
      <p>Senior Developer, Finland</p>
      <div className="d-flex flex-wrap">
        {techsFormatted}
      </div>
      <p><span role="img" aria-label="clock">&#8986;&nbsp;</span>Joined on Aug 30, 2020</p>
    </div>
  )
}

//  Subscribe

const Subscribe = () => {
  const styles = {
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

  return (
    <div className="d-flex flex-column justify-content-center align-items-center"
      style={styles.subscribeBorder} >
      <h1 style={styles.subscribeH1}>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <div className="d-flex justify-content-around " >
        <input style={styles.subscribeInput} type="text" placeholder="First name" />
        <input style={styles.subscribeInput} type="text" placeholder="Lirst name" />
        <input style={styles.subscribeInput} type="text" placeholder="Email" />
      </div>
      <button style={styles.subscribeButton}>Subscribe</button>
    </div>
  )
}

// Hexadecimal color generator

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const styles = {
    hexaColor: {
      padding: "1rem",
      backgroundColor: hexaColor(),
      textAlign: "center",
      color: "#fff",
      fontWeight: "400",
      marginBottom: "0.2rem"
    }
  }

  return (
    <div style={styles.hexaColor}>
      { hexaColor()}
    </div >
  )
}

// JSX element, app
const App = (
  <div className='app'>
    <div className='main-wrapper'>
      <FrontEndTechnologies techImages={techImages} />
      <UserCard />
      <Subscribe />
      {
        [1, 1, 1, 1, 1].map((elem, i) => <HexaColor key={i} />)
      }
    </div>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(App, rootElement)
