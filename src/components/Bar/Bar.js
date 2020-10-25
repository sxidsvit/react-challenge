import React from 'react'

const Bar = ({ totalWorld, country: { name: country, population } }) => {
  console.log('country: ', country);
  console.log('population: ', population);

  const countryBarWidth = `${population / totalWorld * 100}%`

  const styles = {
    bar: {
      display: "flex",
      height: "30px",
      marginTop: "0.2rem",
      marginBotom: "0.2rem",

    },
    countryName: {
      display: "block",
      width: "25%",
      textTransform: "uppercase",
      fontWeight: "700",
    },
    countryBar: {
      display: "block",
      width: "65%",
      paddingRight: "1rem"
    },
    countryBarColor: {
      display: "block",
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
    <div style={styles.bar} >
      <div style={styles.countryName} >{country}</div>
      <div style={styles.countryBar} >
        <div style={styles.countryBarColor} ></div>
      </div>
      <div style={styles.countryPopulation}>{formatedPopulation}</div>
    </div>
  )
}

export default Bar