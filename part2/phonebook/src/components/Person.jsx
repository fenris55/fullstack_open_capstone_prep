const Person = ({newPerson, handleDelete}) => {
  return (
    <>
      <p key={newPerson.id}>{newPerson.name} {newPerson.number}</p>
      <button key={newPerson.id * 100} onClick={() => handleDelete(newPerson.name, newPerson.id)}>delete</button>
    </>
  )
}

export default Person