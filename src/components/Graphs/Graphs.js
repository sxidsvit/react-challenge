import React, { useState } from 'react'
import _ from 'lodash'
import './styles.css'

const Graphs = ({ data }) => {

  const [oderedData, setOderedData] = useState([])

  const numberOfBars = 10

  const onClickHandler = (e) => {
    const fieldName = e.target.value
    setOderedData(_.orderBy(data, fieldName, "desc").slice(0, numberOfBars))
  }
  console.log('oderedData: ', oderedData);

  return (
    <>
      <div className="graph-buttons">
        <button
          className="population"
          value="population"
          onClick={onClickHandler}>
          Population
        </button>
        <button
          className="languages"
          value="languages"
          onClick={onClickHandler} >
          Languages
        </button>
      </div>
      <h4 className="graph-title">10 Most populated countries in the world</h4>

      <div className="graphs">
        <div className="graph-wrapper" id="stat">
          <div className="graphWrapper">

            <div className="bars">
              <div>World</div>
              <div className="bar" style={{ width: "100%", height: "35px" }}></div>
              <div>7&nbsp;693&nbsp;165&nbsp;599</div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Graphs
