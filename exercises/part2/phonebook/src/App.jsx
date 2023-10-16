import { useEffect, useState } from 'react'
import Numbers from './components/Numbers'
import SearchField from './components/SearchField'
import PersonInputForm from './components/PersonInputForm'
import personsService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [notification, setNotification] = useState([])

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
        setNotification([{message:`added ${personResponse.name}'s number to the phonebook.`, type:'success'}])
        setTimeout(() => {
          setNotification([])
        }, 5000)
      })
  }

  const updatePerson = (id) => {
    const personObject = {name: newName,number: newNumber}
    personsService
      .update(id, personObject)
      .then(personResponse => {
        setPersons(persons.filter((person=>person.id!==id)).concat(personResponse))
        setNotification([{message:`updated ${personResponse.name}'s number.`, type:'success'}])
        setTimeout(() => {
          setNotification([])
        }, 5000)
      })
  }

  const handleUpdateOrCreate = () => {
    const duplicateNames = persons.filter(person => person.name === newName)

    if( duplicateNames.length === 0 ) {
      addPerson()
    } else {
      if( !confirm(`a number for ${newName} exists already. do you want to overwrite it?`) ) {
        return
      }
      const updateId = duplicateNames[0].id
      updatePerson(updateId)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    handleUpdateOrCreate()
  }

  const handleDelete = (event) => {
    const deleteId = parseInt(event.target.getAttribute("data-id"))
    const person = persons.filter(person => person.id === deleteId)
    if( person.length > 1 ) {
      setNotification([{message:`couldn't delete due to un-unique id`, type:'error'}])
      setTimeout(() => {
        setNotification([])
      }, 5000)
      return
    }
    if( !confirm(`do you want to delete ${person[0].name}?`)) {
      return
    }
    personsService
      .deletePerson(deleteId)
      .then(response => {
      setPersons(persons.filter(person => person.id !== deleteId))
      setNotification([{message:`${person[0].name} deleted.`, type:'success'}])
      setTimeout(() => {
        setNotification([])
      }, 5000)
      })
      .catch(error => {
      setNotification([{message:`could not delete ${person[0].name}.<br> Servererror: ${error}`, type:'error'}])
      setTimeout(() => {
        setNotification([])
      }, 5000)
      })
  }

  const showPersons = filterPersonsByName()

  return (
    <div>
      <h2>Phonebook</h2>
      {notification.length > 0 ? <Notification message={notification[0].message} type={notification[0].type} /> : ''}
      <SearchField text="search" handleChange={handleSearchTerm} />
      <PersonInputForm name={newName} number={newNumber} handleFormSubmit={handleFormSubmit} handleNewName={handleNewName} handlenewNumber={handlenewNumber} />
      {persons.length > 0 ? <Numbers persons={showPersons} handleDelete={handleDelete} /> : <p>no numbers submitted yet.</p>}
    </div>
  )
}

export default App