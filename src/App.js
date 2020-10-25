/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './styles.css'
import { } from 'react'

const App = () => {
  const [countriesInfo, setCountriesInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const [searchResultLength, setSearchResultLength] = useState(0)


  const url = "https://restcountries.eu/rest/v2/all"

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        let res = await fetch(url)
        const fetchedData = await res.json()
        setCountriesInfo(fetchedData)
        setLoading(false)
      } catch (e) {
        console.log('Сервер не возвращает нужные данные. Попробуйте позже ...')
      }
    }
    fetchData(url)
  }, [])

  return (
    <div className='app' >
      <Header searchResultLength={searchResultLength} />
      { !loading ? <Main
        data={countriesInfo}
        setSearchResultLength={setSearchResultLength}
      /> : <p>Loading ...</p>}
      <Footer />
    </div>
  )
}

export default App