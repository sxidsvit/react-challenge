import React from 'react'
import './styles.css'

const Header = ({ searchResultLength }) => {

  // const { style } = this.props
  return (
    <header className="country-header">
      <h2>World Countries Data</h2>
      <p className="subtitle">Currently, we have 250 countries</p>
      {searchResultLength > 0 &&
        <p className="feedback">{searchResultLength}&nbsp;satisfied the search criteria</p>}
    </header>
  )
}

export default Header
