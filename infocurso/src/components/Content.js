import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = (props) => {

    //Asignamos los cursos en una constante que es un array
    const parts = props.parts

    //Recorremos el array previo para brindarle los datos al componente Part
    const listParts = parts.map((part) =>
        <Part key={part.id} parte={part} />
    )
    return(
        <div>
            {listParts}
            <Total parts={parts} />
        </div>        
    )
}

export default Content;
