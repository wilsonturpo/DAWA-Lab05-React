import React from 'react'

const Part = (props) => {
    const {id} = props.parte
    const {name} = props.parte
    const {exercises} = props.parte

  return(
    <p> {id}: {name} - {exercises}</p>  
    )
}

export default Part;
