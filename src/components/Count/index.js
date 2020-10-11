import React from 'react'
import Button from '../../UI/Button'
import { buttonStyles } from './style'

class Count extends React.Component {

  render() {
    const { count, addOne, minusOne } = this.props
    return (
      <div >
        <h1>{count} </h1>
        <div>
          <Button text='+1' onClick={addOne} style={buttonStyles} />
          <Button text='-1' onClick={minusOne} style={buttonStyles} />
        </div>
      </div>
    )
  }
}

export default Count
