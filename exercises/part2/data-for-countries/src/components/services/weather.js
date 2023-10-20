import axios from 'axios'
const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
const iconUrl = 'https://openweathermap.org/img/wn/'
const iconPostfix = '@2x.png'

const getWeather = (lat,lon) => {
  const request = axios.get(apiUrl.concat('?lat=',lat, '&lon=',lon,'&appid=',apiKey))
  return request.then(response => response.data)
}

const getIconUrl = iconId => iconUrl.concat(iconId,iconPostfix)

export default {
  getWeather,
  getIconUrl
}