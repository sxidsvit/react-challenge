/* eslint-disable space-before-function-paren */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Cat = ({ options: { id, name, description } }) => {

  return (
    <div className="card border-primary mb-4 w-25 ml-1 mr-1" >
      <div className="card-header">{name}</div>
      <div className="card-body text-primary">
        <p className="card-text">{description}.</p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
    metricAvaregeWeight: "",
    lifeSpanAvarege: "",
    catsNumber: ""
  }

  componentDidMount() {
    this.fetchCatsData()
  }

  fetchCatsData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
      const [metricAvaregeWeight, lifeSpanAvarege, catsNumder] = this.averageData()
      this.setState({
        // imperialAvaregeWeight,
        metricAvaregeWeight,
        lifeSpanAvarege,
        catsNumder
      })
    } catch (error) {
      console.log(error)
    }
  }

  averageData() {

    const catsNumder = this.state.data.length

    const rez1 = this.state.data.map(item => {
      const metricWeight = item.weight.metric.split('-')
      let weight = metricWeight.map(item => item.trim())
      const metricAvaregeWeightForCurrentCat = weight.reduce((acum, carrent) => acum + parseInt(carrent), 0) / weight.length
      return metricAvaregeWeightForCurrentCat
    })

    const rez2 = this.state.data.map(item => {
      const lifeSpan = item.life_span.split('-')
      let life = lifeSpan.map(item => item.trim())
      const lifeSpanAvaregeForCurrentCat = life.reduce((acum, carrent) => acum + parseInt(carrent), 0) / life.length
      return lifeSpanAvaregeForCurrentCat
    })

    let metricAvaregeWeight = Math.ceil(rez1.reduce((acum, carrent) => acum + carrent, 0) * 100 / catsNumder) / 100

    let lifeSpanAvarege = Math.ceil(rez2.reduce((acum, carrent) => acum + carrent, 0) * 100 / catsNumder) / 100



    return [metricAvaregeWeight, lifeSpanAvarege, catsNumder]
  }

  render() {

    const styles = {
      dancingFont: {
        fontFamily: "'Dancing Script', cursive",
      },
      p: {
        fontFamily: "'Dancing Script', cursive",
        fontSize: "1.5rem",
        height: "100px",
        marginTop: "1.5rem"
      },

      span: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        color: "#0ADF96",
        fontWeight: "bold",
        fontSize: "1.5rem",
        border: "2px dotted white",
        marginLeft: "1rem",
        marginRight: "1rem"

      }
    }

    return (
      <div className='App'>
        <div className="jumbotron text-center" style={{ backgroundColor: "#D9D2F6" }}>
          <h1 className=" display-4" style={{ fontWeight: "700" }}>30 days Of React</h1>
          <h2 style={{ ...styles.dancingFont, fontWeight: "600" }}>Cats Paradise</h2>
          <h3 style={styles.dancingFont}> There are {this.state.catsNumder} cat breeds</h3>
          <p className="d-flex d-wrap justify-content-center align-items-center" style={styles.p} >On average an  and metric cat can weights about <span style={styles.span}>{this.state.metricAvaregeWeight}</span> Kg  and live <span style={styles.span}>{this.state.lifeSpanAvarege}</span> </p>

        </div>
        <div className=" d-flex flex-wrap justify-content-around align-items-top">
          {this.state.data.map((cat, inx) => (
            <Cat options={cat} key={inx} />
          ))}
        </div>
      </div >
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)