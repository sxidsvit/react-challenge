/* eslint-disable space-before-function-paren */
import React, { Component } from 'react'
import axios from 'axios'
import Cat from './components/Cat/index'
import blackCat from './assets/images/favicon.e3a42d29.ico.ico'
import Button from './components/Button/Button'

class App extends Component {
  state = {
    data: [],
    filteredData: [],
    metricAvaregeWeight: "",
    lifeSpanAvarege: "",
    catsNumber: ""
  }

  componentDidMount() {
    const url = 'https://api.thecatapi.com/v1/breeds'
    this.fetchCatsData(url)
  }

  fetchCatsData = async (url) => {
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
        filteredData: data
      })
      const [metricAvaregeWeight, lifeSpanAvarege, catsNumder] = this.averageData()
      this.setState({
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


  //  Groupi

  groupBy(initialData, param) {
    const mySet = new Set(initialData.map((item) => item[param]))
    const groupObj = {}
    for (let value of mySet) {
      groupObj[value] = initialData.filter(item => item[param] === value)
    }
    return groupObj
  }


  filterData(origin) {
    const filteredData = origin
      ? this.state.data.filter(item => {
        return item.origin === origin
      }) : this.state.data
    this.setState({ filteredData })
    console.log('filteredData: ', filteredData, origin);
  }

  clickButtonHendler(origin) {
    return this.filterData.call(this, origin)
  }

  render() {

    const groupedData = this.groupBy(this.state.data, 'origin')

    const origins = Object.keys(groupedData).map((origin, inx) => {
      const itemsNumber = groupedData[origin].length
      return [origin, itemsNumber]
    })

    const styles = {
      MerriweatherFont: {
        fontFamily: "'Merriweather', serif",
        fontSize: "2.875rem",
        textShadow: "4px 3px 0 #fff, 9px 8px 0 rgba(0, 0, 0, .15)"
      },
      p: {
        fontFamily: "'Merriweather', serif",
        fontSize: "1.2rem",
      },

      span: {
        display: "inline-block",
        color: "#665656",
        fontWeight: "bold",
        fontSize: "1.625rem",
      }
    }

    return (
      <div className='App' >
        <div className="jumbotron text-center" style={{ backgroundColor: "#D9D2F6" }}>
          <h1 className=" display-4" style={{ fontWeight: "700", fontSize: "3rem" }}>30 days Of React</h1>
          <div style={{ margin: "1.5rem auto" }}><img src={blackCat} alt="black cat" /></div>
          <h2 style={{ ...styles.MerriweatherFont, fontWeight: "600" }}>Cats Paradise</h2>
          <h3 style={{ ...styles.p, fontSize: "1.4rem", lineHeight: "35px" }}> There are {this.state.catsNumder} cat breeds</h3>
          <p className="d-flex d-wrap justify-content-center align-items-center" style={styles.p} >On average a cat can weights about&nbsp;<span style={styles.span}>{this.state.metricAvaregeWeight}</span>&nbsp;Kg  and lives&nbsp;<span style={styles.span}>{this.state.lifeSpanAvarege}</span>&nbsp;years</p>
        </div>


        <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ width: "65%", margin: " 20px auto" }}>
          {
            origins.map((item, inx) => {
              const [origin, itemsNumber] = item
              return <Button
                origin={origin}
                itemsNumber={itemsNumber}
                clickButton={this.clickButtonHendler.bind(this)}
                key={inx + 1} />
            })
          }
          {<Button
            origin={''}
            itemsNumber={this.state.data.length}
            clickButton={this.clickButtonHendler.bind(this)}
          />}
        </div>


        <div className=" d-flex flex-wrap justify-content-around align-items-top">
          {this.state.filteredData.map((cat, inx) => (
            <Cat options={cat} key={inx} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
