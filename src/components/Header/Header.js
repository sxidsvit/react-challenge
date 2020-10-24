import React from 'react'
import './styles.css'

const Header = () => {

  // const { style } = this.props
  return (
    <header className="country-header">
      <h2>World Countries Data</h2>
      <p className="subtitle">Currently, we have 250 countries</p>
      <p className="feedback">3 satisfied the search criteria</p>
    </header>
  )
}

export default Header
