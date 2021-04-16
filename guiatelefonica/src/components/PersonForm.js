import React from "react";

const PersonForm = (props) => {

    const newName = props.newName
    const newPhone = props.newPhone

    return (
    <form>
        <div>        
        <h5 style={{display:"inline"}}>name:</h5>
        <input value={newName} type="text" onChange={props.handleChange} />
        <br></br><br></br>
        <h5 style={{display:"inline"}}>Telefono:</h5>
        <input value={newPhone} type="text" onChange={props.handleChangePhone} />
        </div>

        <div>
        <br></br>
        <button type="submit" className="btn btn-success btn-lg" onClick={props.handleClick}>
            add
        </button>
        </div>
    </form>
    );
};

export default PersonForm;
