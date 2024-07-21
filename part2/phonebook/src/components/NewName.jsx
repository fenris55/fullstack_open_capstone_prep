const NewName = ({newName, handleNameChange}) => {
  return (
    <div>name: <input value={newName} onChange={handleNameChange}/></div>
  )
}

export default NewName