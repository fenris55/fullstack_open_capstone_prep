import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
 import ErrorMessage from './components/Error'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personsService
    .getAll()
    .then(initalPersons => {
      setPersons(initalPersons)
    })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleNumberUpdate = () => {
    if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
      let targetPerson = persons.filter(p => p.name === newName)[0]
      let targetID = targetPerson.id
      let newPersonData = {...targetPerson, number: newNumber}

      personsService
      .update(targetID, newPersonData)
      .then(updatedPerson => {
        setPersons(persons.map(p => p.id === updatedPerson.id ? updatedPerson : p))
        setMessage(`Updated ${newName}`)
        setTimeout(() => setMessage(null), 5000)
      })
      .catch(error => {
        setErrorMessage(`Information on ${newName} has already been removed from the server`)
        setTimeout(() => setErrorMessage(null), 5000)
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const repeatContact = () => {
    return persons.some(p => {
      return p.name.toLowerCase() === newName.toLowerCase() &&
      p.number === newNumber
    })
  }

  const existingContact = () => persons.some(p => p.name.toLowerCase() === newName.toLowerCase())

  const addPerson = (event) => {
    event.preventDefault()

     if (repeatContact()) {
      alert(`${newName} is already added to the phonebook`)
      return
    } else if (existingContact()) {
      handleNumberUpdate()
      return
    }

    personsService
    .create({name: newName, number: newNumber})
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setMessage(`Added ${newName}`)
      setTimeout(() => setMessage(null), 5000)
      setNewName('')
      setNewNumber('')
    })
  }

  const handleDelete = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService
      .deletePerson(id)
      .then(deletedPerson => setPersons(persons.filter(p => p.id !== deletedPerson.id)) )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <ErrorMessage message={errorMessage} />
      <Filter search={search} handleSearch={handleSearch} />
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
       newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h3>Numbers</h3>
        <Persons list={persons} searchTerm={search} handleDelete={handleDelete}/>
    </div>
  )
}

export default App