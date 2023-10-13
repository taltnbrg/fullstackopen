const Numbers = ({persons,handleDelete}) => {
    return (
        <div>
          <h2>Numbers</h2>
          {persons.length > 0 ? persons.map(person => <p key={person.name}>{person.name} {person.number} <button data-id={person.id} onClick={handleDelete}>delete</button></p>) : <p>no results found.</p>}
        </div>
    )
}

export default Numbers