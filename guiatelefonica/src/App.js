import React, { useState } from 'react'

import './App.css';

const App = () => {

  const [ persons, setPersons ] = useState(
    [
      { 
        name: 'Arto Hellas',
        telefono:'054-338690'
      }
    ]
  ) 

  const [ newName, setNewName ] = useState('')

  const [ newPhone, setNewPhone ] = useState('')

  const [ filter, setFilter ] = useState('')


  const handleFilter = (event)=>{

    const nameFilter = event.target.value
    setFilter(nameFilter)
  }

  const handleChange = (event) =>{
    const nuevoNombre = event.target.value
    setNewName(nuevoNombre)
  }

  const handleChangePhone = (event) =>{
    const nuevoTelefono = event.target.value
    setNewPhone(nuevoTelefono)
  }

  const handleClick = (e)=>{
    e.preventDefault();
    
    var existe = false

    for(var i = 0; i < persons.length; i++) {
      var name = persons[i].name;

      if(newName == name){
        existe = true        
      }
    }

    if(existe==true){
      window.alert(`${newName} is already added to the phonebook`);      
    }else{      
      const newPerson = {
        name: newName,
        telefono:newPhone
      }

      setPersons([
        ...persons,
        newPerson
      ])

      setNewName('')
      setNewPhone('')
    }

  }

  return (
    <div style={{margin:20}}>
      <h2>Phonebook</h2>

      Filter shown with: 
      <input value={filter} type="text" onChange={handleFilter}/>

      <form>

        <div>
          name: 
          <input value={newName} type="text" onChange={handleChange}/>
          <br></br>
          Telefono: 
          <input value={newPhone} type="text" onChange={handleChangePhone}/>
        </div>

        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>

      </form>

      <h2>Numbers</h2>
      {
        persons.map((person) => person.name.includes(filter) == true  && (
          <p key={person.name}>{person.name} - {person.telefono}</p>
        ))
      }

    </div>
  )
}

export default App;
