import React from 'react'
import HexaColorBox from '../HexaColorBox/HexaColorBox'
import { hexaColor } from '../../Utils/utils'
import './styles.css'

const App = () => {

  const hexadecimalList = []
  for (let number = 0; number < 27; number++) {
    hexadecimalList.push(<HexaColorBox key={number + 1} hexaColor={hexaColor} />)
  }

  return (
    <div className="container">
      <h1 className="title"> 30 Days Of React</h1>
      <h5 className="subtitle">Hexadecimal Colors</h5>
      <div className="box-wrapper">
        {hexadecimalList}
      </div>
    </div>
  )
}

export default App