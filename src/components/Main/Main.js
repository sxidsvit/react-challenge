import React from 'react'
import FlagCard from '../FlagCard/FlagCard';
import './styles.css'

const Main = ({ data }) => {

  const flagCardList = data.map((c, inx) => <FlagCard country={c} key={inx} />)

  return (
    <main>
      <div className='countries-wrapper' >
        {flagCardList}
      </div>
    </main>
  )
}

export default Main
