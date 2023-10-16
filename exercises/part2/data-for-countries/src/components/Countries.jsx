import Country from "./Country"

const Countries = ({countries}) => {
  if( !countries ) {
    return (
      <p>No countries initialized yet.</p>
    )
  }
  if( countries.length === 0 ) {
    return (
      <p>No countries found.</p>
    )
  }

  if( countries.length > 10 ) {
    return (
      <p>Please be more specific in your search.</p>
    )
  }

  if( countries.length > 1 ) {
    return (
      <div>
        {countries.map(country => <p key={country.name.common}>{country.name.common}</p>)}
      </div>
    )
  }

  return (
    <div>
      <Country country={countries[0]} />
    </div>
  )

}

export default Countries