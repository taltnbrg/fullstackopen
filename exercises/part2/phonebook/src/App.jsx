import { useEffect, useState } from 'react'
import Numbers from './components/Numbers'
import SearchField from './components/SearchField'
import PersonInputForm from './components/PersonInputForm'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    personsService.getAll()
    .then(personsResponse => {
        setPersons(personsResponse)
    })
  }, [])

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

  const addPerson = () => {
    const personObject = {name: newName, number: newNumber}
    personsService
      .create(personObject)
      .then(personResponse => {
        setPersons(persons.concat(personResponse))
      })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if(persons.map(person=>person.name).includes(newName)) {
      alert( `${newName} was already added to the phonebook.` )
      return
    }
    addPerson()
  }

  const showPersons = filterPersonsByName()

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField text="search" handleChange={handleSearchTerm} />
      <PersonInputForm handleFormSubmit={handleFormSubmit} handleNewName={handleNewName} handlenewNumber={handlenewNumber} />
      {persons.length > 0 ? <Numbers persons={showPersons} /> : <p>no numbers submitted yet.</p>}
    </div>
  )
}

export default App