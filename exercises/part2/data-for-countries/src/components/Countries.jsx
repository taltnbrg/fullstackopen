import Country from "./Country"

const Countries = ({countries}) => {

  let displayText = ''
  if( !countries ) {
    displayText = 'No countries initialized yet.'
  }

  if( countries.length === 0 ) {
    displayText = 'No countries found.'
  }

  if( countries.length > 10 ) {
    displayText = 'Please be more specific in your search.'
  }

  return (
    <div>
      {displayText.length > 0 ?
        <p>{displayText}</p>
      :
        countries.map(country => <Country key={country.name.common} country={country} />)
      }
    </div>
  )
}

export default Countries