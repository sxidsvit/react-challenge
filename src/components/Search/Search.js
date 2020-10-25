import React, { useState } from 'react'
import './styles.css'

const Search = ({ data }) => {

  const [searchResult, setSearchResult] = useState({})

  const [value, setValue] = useState('')


  const onSearchHandler = (e) => {

    const searchQueery = e.target.value
    setValue(searchQueery)

    const result = data.filter(item => {
      return item.name.toLowerCase().includes(searchQueery.toLowerCase())
        || item.capital.toLowerCase().includes(searchQueery.toLowerCase())
        || item.languages.find(item => item.name.toLowerCase().includes(searchQueery.toLowerCase()))
    })

    setSearchResult(result)
    console.log('searchResult: ', searchResult);

  }

  return (
    <div className="controls">
      <input
        className="search-input"
        type="text"
        placeholder="Search countries by name, city and languages"
        value={value}
        onChange={onSearchHandler}
      />
      <div>
        <a href="#stat">
          <i className="fas fa-chart-bar"></i>
        </a>
      </div>
    </div>
  )
}

export default Search
