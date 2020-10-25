import React, { useState } from 'react'
import FlagCard from '../FlagCard/FlagCard';
import Search from '../Search/Search';
import './styles.css'

const Main = ({ data, setSearchResultLength }) => {

  const [searchResult, setSearchResult] = useState({})

  const searchResultLength = searchResult.length
  setSearchResultLength(searchResultLength)

  const dataForDisplaing = searchResultLength ? searchResult : data

  const flagCardList = dataForDisplaing.map((c, inx) => <FlagCard country={c} key={inx} />)


  return (
    <main>
      <Search
        data={data}
        setSearchResult={setSearchResult}
      />
      <div className='countries-wrapper' >
        {flagCardList}
      </div>
    </main>
  )
}

export default Main
