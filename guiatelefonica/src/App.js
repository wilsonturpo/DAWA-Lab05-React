import React, { useState } from 'react'

import './App.css';

const App = () => {

  const [ persons, setPersons ] = useState(
    [
      { 
        name: 'Arto Hellas' 
      }
    ]
  ) 

  const [ newName, setNewName ] = useState('')

  const handleChange = (event) =>{
    const nuevoNombre = event.target.value
    setNewName(nuevoNombre)
  }

  const handleClick = (e)=>{
    e.preventDefault();
    const newPerson = {
      name: newName
    }

    setPersons([
      ...persons,
      newPerson
    ])

    setNewName('')
    
  }

  return (
    <div style={{margin:20}}>
      <h2>Phonebook</h2>

      <form>

        <div>
          name: 
          <input value={newName} type="text" onChange={handleChange}/>
        </div>

        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>

      </form>

      <h2>Numbers</h2>
      {
        persons.map((person) =>(
          <p key={person.name}>{person.name}</p>
        ))
      }

    </div>
  )
}

export default App;
