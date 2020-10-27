import React from 'react'
import './styles.css'

const GenerateColorsButton = ({ generateList }) => {
  return (
    <>
      <button
        className="generate-color-btn"
        onClick={generateList}
      >
        Generate Colors
      </button>
    </>
  )
}

export default GenerateColorsButton
