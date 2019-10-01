import React from 'react';

const NavButton = (props) => {
    return (
        <div className="NavButton" >
            <button type={props.buttonType}>{props.children}</button>
        </div >
    );
}

export default NavButton;