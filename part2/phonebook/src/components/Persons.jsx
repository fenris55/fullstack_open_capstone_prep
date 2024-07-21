import Person from './Person'

const Persons = ({list, searchTerm}) => {
  if (searchTerm) {
    let filteredNames = list.filter(p => {
      let nameStart = p.name.toLowerCase().slice(0, searchTerm.length)
        return nameStart === searchTerm.toLowerCase()
    })

    return (
      <>
        {filteredNames.map(p => <Person key={p.name} newPerson={p}/>)}
      </>
    )
  }

  return (
    <>
    {list.map(p => <Person key={p.name} newPerson={p}/>)}
    </>
  )
}

export default Persons