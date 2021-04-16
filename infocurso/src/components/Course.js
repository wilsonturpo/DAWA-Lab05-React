import React from 'react'
import Content from './Content'
import Header from './Header'


const Course = (props) => {

    const {name} = props.course
    const {parts} = props.course
  return(
    <div style={{margin:20}}>
        <Header name={name} />
        <Content parts={parts}/>
    </div> 
    )
}

export default Course;
