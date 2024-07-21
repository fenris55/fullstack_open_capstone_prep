import NewName from './NewName'
import NewNumber from './NewNumber'

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNewNumber}) => {
  return (
    <form onSubmit={addPerson}>
        <NewName newName={newName} handleNameChange={handleNameChange}/>
        <br />
        <NewNumber newNumber={newNumber} handleNewNumber={handleNewNumber} />
        <div><button type="submit">add</button></div>
    </form>
  )
}

export default PersonForm