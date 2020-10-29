import React from 'react'
import TwitCard from '../TwitCard/TwitCard'

const TwitsList = ({ twitts, setTwitts }) => {
  return (
    <>
      {
        twitts.length
          ? twitts.map(twit =>
            <TwitCard
              key={twit.id}
              twit={twit}
              twitts={twitts}
              setTwitts={setTwitts}
            />)
          : <p className="notwits">You have no tweets</p>
      }
    </>
  )
}

export default TwitsList
