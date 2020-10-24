import React from 'react'

const FlagCard = ({ flag, name, capital, languages, population, currencies }) => {
  return (
    <div className="country">
      <div className="country_flag">
        <img src={flag} alt={name} />
      </div>
      <h3 className="country_name">{name}</h3>
      <div className="country_text">
        <p><span>Capital: </span>{capital}</p>
        <p><span>Languages: </span>
          {/* {languages
            .map(language => language.name.join(', '))} */}
        </p>
        <p><span>Population: </span>27&nbsp;{population}&nbsp;145</p>
        <p><span>Currency: </span>
          {/* {currencies
            .map(currency => currency.name.join(', '))} */}
        </p>
      </div>
    </div>
  )
}

export default FlagCard