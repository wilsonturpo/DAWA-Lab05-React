import React from 'react'

const Total = (props) => {

    //Desestructuramos para desempacar el arreglo de partes
    const parts = props.parts

    //Usamos reduce para iterar y sumar los números de ejercicios
    const sumaTotal = parts.reduce((prev, next) => prev + next.exercises, 0);
    return (
    <div>
        <p>Number of exercises: {sumaTotal}</p>
    </div>
    )
}

export default Total