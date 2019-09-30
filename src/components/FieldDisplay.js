import React from 'react';

const FieldDisplay = (props) => {
    return (
        <div className="FieldDisplay">
            <p>{props.children}</p>
        </div>
    );
}

export default FieldDisplay;