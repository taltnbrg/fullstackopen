import { useState, useEffect } from 'react'
import countriesService from './components/services/countries'
import weatherService from './components/services/weather'
import SearchField from './components/SearchField'
import Countries from './components/Countries'
import './index.css'

function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleSearchTerm = event => {
    setSearchTerm(event.target.value)
  }

  const showCountries = countries.filter( country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <SearchField text="search" handleChange={handleSearchTerm} />
      <Countries countries={showCountries} />
    </div>
  )
}

export default App
