const Numbers = ({persons}) => {
    return (
        <div>
          <h2>Numbers</h2>
          {persons.length > 0 ? persons.map(person => <p key={person.name}>{person.name} {person.number}</p>) : <p>no numbers submitted</p>}
        </div>
    )
}

export default Numbers