import React, { useRef } from 'react'
import './styles.css'


const HexaColorBox = ({ hexaColor }) => {
  const colorRef = useRef('')
  const bgcolor = hexaColor()

  const styles = {
    hexaColor: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      textAlign: "center",
      width: "160px",
      height: "160px",
      margin: "5px",
      padding: "30px",
      backgroundColor: bgcolor,
      borderRadius: "10px",
      border: "2px solid #fff",
      color: "rgb(239, 239, 239)",
      fontWeight: "500",
      fontSize: "22px",
      fontFamily: "Montserrat"
    },
    clipboard: {
      cursor: "pointer",
      fontSize: "28px",
      color: "white",
      padding: "20px"
    }
  }

  const clickHandler = () => {
    let hexCode = colorRef.current.innerText
    navigator.clipboard.writeText(hexCode)
    navigator.clipboard.readText()
      .then(rez => console.log('Copied to clipboard: ', rez))
  }

  return (
    <div style={styles.hexaColor}>
      <small ref={colorRef}>
        {bgcolor}
      </small>
      <div
        className="wrapper__copy"
        onClick={clickHandler}
      >
        <i className="far fa-clipboard copy"
          style={styles.clipboard}></i>
      </div>
    </div>
  )
}

export default HexaColorBox