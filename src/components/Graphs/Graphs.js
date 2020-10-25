import React, { useState } from 'react'
import Bar from '../Bar/Bar'
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

  const countriesList = []
  // const totalWorld = oderedData[0].population
  oderedData.map((country, inx) => {
    return countriesList.push(
      <Bar totalWorld={totalWorld} country={country} key={inx} />
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
        // onClick={onClickHandler}
        >
          Languages
        </button>
      </div>

      {clickedButton === 'population'
        && <h4 className="graph-title">
          10 Most populated countries in the world</h4>
      }
      <div className="graphs">
        <div className="graph-wrapper" >
          <div className="graphWrapper">
            <div className="bars">
              {clickedButton === 'population'
                && [<Bar
                  totalWorld={totalWorld}
                  country={{
                    name: "World",
                    population: totalWorld
                  }}
                />, countriesList]}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Graphs
