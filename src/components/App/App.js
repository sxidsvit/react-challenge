import React, { useEffect, useState } from 'react'
import HexaColorBox from '../HexaColorBox/HexaColorBox'
import { hexaColor } from '../../Utils/utils'
import './styles.css'
import GenerateColorsButton from '../GenerateColorsButton/GenerateColorsButton'

const App = () => {

  const [hexadecimalList, setHexadecimalList] = useState([])

  const generateList = () => {
    const list = []
    for (let number = 0; number < 27; number++) {
      list.push(<HexaColorBox key={number + 1
      } hexaColor={hexaColor} />)
    }
    setHexadecimalList(list)
    return list
  }

  useEffect(() => {
    setHexadecimalList(generateList())
  }, [])

  return (
    <div className="container">
      <h1 className="title"> 30 Days Of React</h1>
      <h5 className="subtitle">Hexadecimal Colors</h5>

      <div className="color-generator-row">
        <GenerateColorsButton
          generateList={generateList}
        />
      </div>

      <div className="box-wrapper">
        {hexadecimalList}
      </div>
    </div>
  )
}

export default App