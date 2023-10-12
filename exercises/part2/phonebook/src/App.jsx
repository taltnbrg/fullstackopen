import { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handlenewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const filterPersonsByName = () => {
    if( searchTerm.length > 0 ) {
      return persons.filter( (person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    return persons
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if(persons.map(person=>person.name).includes(newName)) {
      alert( `${newName} was already added to the phonebook.` )
      return
    }
    setPersons(persons.concat({name: newName, number:newNumber}))
  }

  const showPersons = filterPersonsByName()

  return (
    <div>
      <h2>Phonebook</h2>
      search: <input type="text" onChange={handleSearchTerm} />
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input type="text" onChange={handleNewName} />
        </div>
        <div>
          number: <input type="text" onChange={handlenewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {persons.length > 0 ? <Numbers persons={showPersons} /> : <p>no numbers submitted yet.</p>}
    </div>
  )
}

export default App