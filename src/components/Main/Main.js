import React, { useEffect, useState } from 'react'
import FlagCard from '../FlagCard/FlagCard';
import Search from '../Search/Search';
import './styles.css'

const Main = ({ data, setSearchResultLength }) => {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState({})

  useEffect(() => {
    setSearchResultLength(searchResult.length)
  }, [setSearchResultLength, searchResult.length])


  const dataForDisplaing = search ? searchResult : data

  const flagCardList = dataForDisplaing.map((c, inx) => <FlagCard country={c} key={inx} />)

  return (
    <main>
      <Search
        data={data}
        search={search}
        setSearch={setSearch}
        setSearchResult={setSearchResult}
      />
      <div className='countries-wrapper' >
        {flagCardList}
      </div>
    </main>
  )
}

export default Main
