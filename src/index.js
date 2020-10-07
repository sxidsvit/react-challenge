// index.js
import React from 'react'
import ReactDOM from 'react-dom'

//  ================== component ==============================================

const Square = ({ color, number }) => {
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
//  ================== component ==============================================

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

//  ================== component ==============================================

const CountryPopulation = ({ totalWorld, country: { country, population } }) => {

  const countryBarWidth = `${population / totalWorld * 100}%`

  const styles = {
    bar: {
      height: "30px",
      marginTop: "0.2rem",
      marginBotom: "0.2rem",

    },
    countryName: {
      width: "15%",
      textTransform: "uppercase",
      fontWeight: "700",
    },
    countryBar: {
      width: "75%",
      paddingRight: "1rem"
    },
    countryBarColor: {
      backgroundColor: "#FFA500",
      width: countryBarWidth,
      height: "20px",
    },
    countryPopulation: {
      width: "20%",
      fontWeight: "500",
    },
  }

  const formatedPopulation = new Intl.NumberFormat().format(population)

  return (
    <div style={styles.bar} className="d-flex ">
      <div style={styles.countryName} className="">{country}</div>
      <div style={styles.countryBar} className="">
        <div style={styles.countryBarColor} ></div>
      </div>
      <div style={styles.countryPopulation} className="">{formatedPopulation}</div>
    </div>
  )
}


// J================== SX element App (main component) ========================

const App = () => {

  //  For Number Generator
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
      <Square color={color} number={number} key={number + 1} />
    )
  }

  //  For Hexadecimal Colors
  const hexadecimalList = []
  for (let number = 0; number < 32; number++) {
    hexadecimalList.push(<HexaColor key={number + 1} />)
  }

  //  For World population
  const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'USA', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russia', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]

  const countriesList = []
  const totalWorld = tenHighestPopulation[0].population
  tenHighestPopulation.map((country, inx) => {
    return countriesList.push(
      <CountryPopulation country={country} totalWorld={totalWorld} key={inx} />
    )
  })

  return (
    <div className="container">

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

      <div style={{ margin: "auto", width: "960px" }} className="pt-5 mb-5" >
        <h3 className="text-center font-weight-bold"> 30 Days Of React</h3>
        <h4 className="text-center font-weight-light mb-2">Worl population</h4>
        <p style={{ fontSize: "10px" }} className="text-center font-weight-light mb-4">Ten moust populated countries</p>
        {countriesList}
      </div>

    </div>
  )
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
