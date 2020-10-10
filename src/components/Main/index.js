import React from 'react'
import Button from '../../UI/Button'
import Count from '../Count'
import TechList from '../TechList'
import UserCard from '../UserCard'
import { buttonStyles } from './styles'

class Main extends React.Component {

  render() {

    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props

    return (
      <main>
        <div className='main-wrapper' style={this.props.style}>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}

export default Main
