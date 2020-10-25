import React from 'react'
import './styles.css'

const Search = ({ data, search, setSearch, setSearchResult }) => {

  const onSearchHandler = (e) => {

    const search = e.target.value
    setSearch(search)

    const result = data.filter(item => {
      return item.name.toLowerCase().includes(search.toLowerCase())
        || item.capital.toLowerCase().includes(search.toLowerCase())
        || item.languages.find(item => item.name.toLowerCase().includes(search.toLowerCase()))
    })

    setSearchResult(result)
  }

  return (
    <div className="controls">
      <input
        className="search-input"
        type="text"
        placeholder="Search countries by name, city and languages"
        value={search}
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
