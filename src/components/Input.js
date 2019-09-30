import React from 'react';

const Input = (props) => {
    return (
        <div className="Input">
            <label for={props.labelFor}>{props.labelType}</label>
            <input id={props.labelFor} type={props.inputType}></input>
        </div>
    );
}

export default Input;