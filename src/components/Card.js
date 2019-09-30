import React from 'react';

const Card = (props) => {
    return (
        <div className="displayCard">
            <div>
                {props.visibleElement}
            </div>
            <h3>
                {props.name}
            </h3>
        </div>
    );
}

export default Card;