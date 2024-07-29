import Person from './Person'

const Persons = ({list, searchTerm, handleDelete}) => {
  if (searchTerm) {
    let filteredNames = list.filter(p => {
      let nameStart = p.name.toLowerCase().slice(0, searchTerm.length)
        return nameStart === searchTerm.toLowerCase()
    })

    return (
      <div>
        {filteredNames.map(p => <Person key={p.name} newPerson={p} handleDelete={handleDelete}/>)}
      </div>
    )
  }

  return (
    <div>
    {list.map(p => {
      return (
        <Person key={p.name} newPerson={p} handleDelete={handleDelete}/>
      )
    })}
    </div>
  )
}

export default Persons