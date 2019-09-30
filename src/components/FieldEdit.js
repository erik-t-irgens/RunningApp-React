import React from 'react';

const FieldEdit = (props) => {
    return (
        <div className="FieldEdit">
            <input type={props.inputType}>{props.children}</input>
        </div>
    );
}

export default FieldEdit;