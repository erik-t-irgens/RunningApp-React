import React from 'react';

const CTAButton = (props) => {
    return (
        <div>
            <button type={props.buttonType} className="CTAButton">{props.children}</button>
        </div>
    );
}

export default CTAButton;