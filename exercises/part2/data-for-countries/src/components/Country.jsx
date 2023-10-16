const Country = ({country}) => {

    const languages = Object.values(country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital[0]}</p>
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
        </div>
    )
}

export default Country