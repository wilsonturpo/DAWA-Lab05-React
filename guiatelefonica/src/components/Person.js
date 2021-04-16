import React from 'react'

const Person = (props)=>{

    const name = props.name
    const telefono = props.phone
    return(
        <li>{name} - {telefono}</li>
    )
}

export default Person;