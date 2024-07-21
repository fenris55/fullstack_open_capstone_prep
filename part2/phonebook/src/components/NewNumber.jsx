const NewNumber = ({newNumber, handleNewNumber}) => {
  return (
    <div>number: <input value={newNumber} onChange={handleNewNumber} /></div>
  )
}

export default NewNumber