import { useState, useEffect } from 'react'
import weatherService from './services/weather'
import './weather.css'

const WeatherReport = ({capitalName, capitalLongitude, capitalLatitude}) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [weatherReport, setWeatherReport] = useState(null)

  useEffect(() => {
    weatherService.getWeather(capitalLatitude, capitalLongitude)
    .then(initialweatherReport => {
      setWeatherReport(initialweatherReport)
      setErrorMessage('')
    })
    .catch(errorResponse => setErrorMessage(errorResponse.message))
  }, [])

  const kelvinToCelsius = kelvin => kelvin-273.15

  if( errorMessage.length > 0 ) {
    return (
      <p>Weather could not be loaded. Error: <br/>{errorMessage}</p>
    )
  }

  if(!weatherReport) {
    return ( <p>Loading...</p> )
  }

  return (
    <div>
      <h2>Weather in {capitalName} <span className='small'>(lat {capitalLatitude} long {capitalLongitude})</span></h2>
      <p>temperatur {Math.round(kelvinToCelsius(weatherReport.main.temp)*100)/100}°C</p>
      <img
          src={weatherService.getIconUrl(weatherReport.weather[0].icon)}
          alt={weatherReport.weather.description}
          height={100}
      />
    </div>
  )
}

export default WeatherReport