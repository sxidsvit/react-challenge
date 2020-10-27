import React, { useRef } from 'react'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = ({ hexaColor }) => {

  const bgcolor = hexaColor()

  const styles = {
    hexaColor: {
      width: "120px",
      height: "120px",
      backgroundColor: bgcolor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      border: "2px solid #fff",
      color: "#fff",
      fontWeight: "500",
      fontSize: "18px",
    }
  }

  return (
    <div style={styles.hexaColor}>
      { bgcolor}
    </div>
  )
}

const App = () => {

  const hexadecimalList = []
  for (let number = 0; number < 32; number++) {
    hexadecimalList.push(<HexaColor key={number + 1} hexaColor={hexaColor} />)
  }

  return (
    <div className="container">
      <div style={{ margin: "auto", width: "960px" }} className="pt-5 mb-5" >
        <h3 className="text-center font-weight-bold"> 30 Days Of React</h3>
        <h5 className="text-center font-weight-light mb-4">Hexadecimal Colors</h5>
        <div className="d-flex flex-row flex-wrap justify-content-center ">
          {hexadecimalList}
        </div>
      </div>
    </div>
  )
}

export default App