import { useState } from 'react'
import WeatherReport from './WeatherReport'

const Country = ({country}) => {
  const [showStatus, setShowStatus] = useState(false)
  const languages = Object.values(country.languages)

  const switchShowStatus = () => {
    setShowStatus(!showStatus)
  }

  if( !showStatus ) {
    return (
      <p key={country.name.common} >{country.name.common} <button onClick={switchShowStatus}>show info</button></p>
    )
  }

  const capitalText = country.capital.length === 1 ? 'Capital' : 'Capitals'
  const capitalLatitude = country.capitalInfo.latlng[0]
  const capitalLongitude = country.capitalInfo.latlng[1]

  return (
    <div>
      <h1>{country.name.common}</h1>
      <button onClick={switchShowStatus}>hide info</button>
      <p>{capitalText} {country.capital.join(', ')}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        {languages.map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <img
          src={country.flags.svg}
          alt={country.flags.alt}
          height={300}
      />
      <WeatherReport capitalName={country.capital[0]} capitalLatitude={capitalLatitude} capitalLongitude={capitalLongitude} />
    </div>
  )
}

export default Country