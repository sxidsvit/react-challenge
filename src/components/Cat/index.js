/* eslint-disable space-before-function-paren */
import React, { Component } from 'react'
import axios from 'axios'
import { styles } from './style'

class Cat extends Component {

  state = {
    imgUrl: ""
  }

  fetchCatImg = async (url) => {
    try {
      let response = await axios.get(url)
      const imgUrl = await response.data[0].url
      this.setState({
        imgUrl
      })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    const url = `https://api.thecatapi.com/v1/images/search?breed_id=${this.props.options.id}`
    this.fetchCatImg(url)
  }


  render() {

    const { options: { name, origin, temperament, life_span, weight: { metric }, description } } = this.props

    return (
      <div style={styles.catCard}>
        <div style={styles.catCardImage}>
          <img style={styles.catCardImageImg} src={this.state.imgUrl} alt={name} loadin="lazy"></img>
        </div>
        <div style={styles.catCardBody} >
          <h1 style={styles.catName}>{name}</h1>
          <p style={{ ...styles.catOrigin, ...styles.p }}><strong>{origin}</strong></p>
          <p style={styles.p}><span style={styles.span}>Temperament:&nbsp;{temperament}</span></p>
          <p style={styles.p}><span style={styles.span}>Life span:&nbsp;{life_span}&nbsp;years</span></p>
          <p style={styles.p}><span style={styles.span}>Weight:&nbsp;{metric}&nbsp;Kg</span></p>
          <div style={styles.catDesc}>
            <p style={styles.p}><span style={styles.span}>Description:</span></p>
            <p style={{ ...styles.p, margineTop: "10px" }}>{description}</p>
          </div>
        </div>
      </div>

    )
  }
}

export default Cat
