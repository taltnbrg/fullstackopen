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
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (event) => {
    const deleteId = parseInt(event.target.getAttribute("data-id"))
    const person = persons.filter(person => person.id === deleteId)
    if( person.length > 1 ) {
      alert( `couldn't delete due to un-unique id`)
      return
    }
    if( !confirm(`do you want to delete ${person[0].name}?`)) {
      return
    }
    personsService
      .deletePerson(deleteId)
      .then(response => {
        setPersons(persons.filter(person => person.id !== deleteId))
        alert('person deleted.')
      })
      .catch(error => {
        alert('could not delete person.')
      })
  }

  const showPersons = filterPersonsByName()

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField text="search" handleChange={handleSearchTerm} />
      <PersonInputForm name={newName} number={newNumber} handleFormSubmit={handleFormSubmit} handleNewName={handleNewName} handlenewNumber={handlenewNumber} />
      {persons.length > 0 ? <Numbers persons={showPersons} handleDelete={handleDelete} /> : <p>no numbers submitted yet.</p>}
    </div>
  )
}

export default App