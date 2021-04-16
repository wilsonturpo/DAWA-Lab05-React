import React, { useState } from 'react'

import './App.css';
import Filter from './components/Filter';
import Person from './components/Person';
import PersonForm from './components/PersonForm';

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
    
    var repetido = false

    for(var i = 0; i < persons.length; i++) {
      var name = persons[i].name;

      if(newName == name){
        repetido = true        
      }
    }

    if(repetido==true){
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
    <div style={{margin:20, background:"#c2edc8"}} className="container">
      <h2>Phonebook</h2> <br></br>

      <Filter 
        filterName={filter} 
        handleFilter={handleFilter} 
      />
      <br></br>

      <PersonForm 
        newName={newName}
        newPhone={newPhone}
        handleChange={handleChange}
        handleChangePhone={handleChangePhone}
        handleClick={handleClick}
      />
      <br></br>
      <h2>Numbers</h2>
      <br></br>
      <ul>
        {
          persons.map((person) => person.name.includes(filter) == true  && (
            
            <Person 
              key={person.name} 
              name={person.name} 
              phone={person.telefono} 
            />
            
          ))
        }
      </ul>

    </div>
  )
}

export default App;
