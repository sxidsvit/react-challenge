// index.js
import React from 'react'
import ReactDOM from 'react-dom'

const Square = ({ color, number }) => {
  console.log('Square color: ', color);
  const styles = {
    square: {
      width: "120px",
      height: "120px",
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      border: "2px solid #fff",
      color: "#fff",
      fontWeight: "500",
      fontSize: "24px",
    }
  }

  return (
    <div style={styles.square} > { number}</div>
  )
}

// JSX element App
const App = () => {
  const colors = ["#21BF73", "#FDDB3A", "#FD5E53"]

  const numberColor = (number, colors) => {
    const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
    let color = "#fff"
    if (number % 2) { color = colors[1] } else color = colors[0]
    color = (primeNumber.indexOf(number) >= 0) ? colors[2] : color
    return color
  }

  const numberList = []
  for (let number = 0; number < 32; number++) {
    let color = numberColor(number, colors)
    numberList.push(
      <Square color={color} number={number} />
    )
  }


  const HexaColor = () => {

    const hexaColor = () => {
      let str = '0123456789abcdef'
      let color = ''
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
      }
      return '#' + color
    }

    const styles = {
      hexaColor: {
        width: "120px",
        height: "120px",
        backgroundColor: hexaColor(),
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
        { hexaColor()}
      </div>
    )
  }

  const hexadecimalList = []
  for (let number = 0; number < 32; number++) {
    hexadecimalList.push(<HexaColor />)
  }


  return (
    <div classname="container">
      <div style={{ margin: "auto", width: "960px" }} className="pt-5 mb-5" >
        <h3 className="text-center font-weight-bold"> 30 Days Of React</h3>
        <h5 className="text-center font-weight-light mb-4"> Number Generator</h5>
        <div className="d-flex flex-row flex-wrap justify-content-center ">
          {numberList}
        </div>
      </div>
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

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
