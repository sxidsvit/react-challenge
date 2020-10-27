import React from 'react'

const HexaColorBox = ({ hexaColor }) => {

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

  return (
    <div style={styles.hexaColor}>
      <small>{bgcolor}</small>
      <i className="far fa-clipboard"
        style={styles.clipboard}></i>
    </div>
  )
}

export default HexaColorBox