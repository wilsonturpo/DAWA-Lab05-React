import React from 'react'

const Filter = (props) =>{

    const filter = props.filterName
    
    return(
        <div>
            <h5 style={{display:'inline'}}>Filter shown with: </h5>            
            <input value={filter} type="text" onChange={props.handleFilter}/>
        </div>
    )
}

export default Filter;