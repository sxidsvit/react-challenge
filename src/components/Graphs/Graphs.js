import React, { useState } from 'react'
import Bar from '../Bar/Bar'
import _ from 'lodash'
import './styles.css'
import { sortlanguages } from '../../Utils/utils'

const Graphs = ({ data }) => {

  const [oderedData, setOderedData] = useState([])
  const [clickedButton, setClickedButton] = useState('')

  const totalWorld = 7693165599
  const numberOfBars = 10

  const onPopulationClickHandler = (e) => {
    const fieldName = e.target.value
    setOderedData(_.orderBy(data, fieldName, "desc").slice(0, numberOfBars))
    setClickedButton('population')
  }

  const onlanguagesClickHandler = (e) => {
    const fieldName = e.target.value
    const arrayOfLanguages = data.map(country => country[fieldName]).flat()
    setOderedData(sortlanguages(arrayOfLanguages, numberOfBars))
    setClickedButton('languages')
  }

  const countriesList = []
  oderedData.map((country, inx) => {
    return countriesList.push(
      <Bar totalWorld={totalWorld} country={country} key={inx} />
    )
  })

  const languagesList = []

  oderedData.map((country, inx) => {

    const obj = {
      name: Object.keys(country)[0],
      population: Object.values(country)[0]
    }
    console.log('obj: ', obj);

    return languagesList.push(
      <Bar totalWorld={112} country={obj} key={inx} />
    )
  })


  return (
    <>
      <div className="graph-buttons" id="stat">
        <button
          className="population"
          value="population"
          onClick={onPopulationClickHandler}>
          Population
        </button>
        <button
          className="languages"
          value="languages"
          onClick={onlanguagesClickHandler}
        >
          Languages
        </button>
      </div>

      {clickedButton === 'population'
        && <h4 className="graph-title">
          10 Most populated countries in the world</h4>
      }
      {clickedButton === 'languages'
        && <h4 className="graph-title">
          10 Most spoken languages in the world</h4>
      }

      <div className="graphs">
        <div className="graph-wrapper" >
          <div className="graphWrapper">
            <div className="bars" >
              {clickedButton === 'population'
                ? [<Bar
                  totalWorld={totalWorld}
                  country={{
                    name: "World",
                    population: totalWorld
                  }}
                />, countriesList]
                : clickedButton === 'languages'
                  ? [languagesList]
                  : <h4 class="graph-title">
                    Click on any of the buttons
                  </h4>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Graphs
