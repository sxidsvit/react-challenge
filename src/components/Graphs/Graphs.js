import React, { useState } from 'react'
import Bar from '../Bar/Bar'
import { sortlanguages } from '../../Utils/utils'
import _ from 'lodash'
import './styles.css'

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
    setOderedData(sortlanguages(arrayOfLanguages))
    setClickedButton('languages')
  }

  const countriesList = []
  oderedData.map((country, inx) => {
    const obj = {
      name: country.name,
      value: country.population
    }
    return countriesList.push(
      <Bar total={totalWorld} barData={obj} key={inx} />
    )
  })

  const languagesList = []
  oderedData.slice(0, numberOfBars).map((country, inx) => {
    const obj = {
      name: Object.keys(country)[0],
      value: Object.values(country)[0]
    }
    const totalnNumberOfLanguages = oderedData.length
    return languagesList.push(
      <Bar total={totalnNumberOfLanguages} barData={obj} key={inx} />
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
                  total={totalWorld}
                  barData={{
                    name: "World",
                    value: totalWorld
                  }}
                  key={totalWorld}
                />, countriesList]
                : clickedButton === 'languages'
                  ? [languagesList]
                  : <h4 className="graph-title">
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
