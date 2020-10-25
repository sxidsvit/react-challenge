import React from 'react'
import FlagCard from '../FlagCard/FlagCard';
import Search from '../Search/Search';
import './styles.css'

const Main = ({ data }) => {

  const flagCardList = data.map((c, inx) => <FlagCard country={c} key={inx} />)

  return (
    <main>
      <Search data={data} />
      <div className='countries-wrapper' >
        {flagCardList}
      </div>
    </main>
  )
}

export default Main
