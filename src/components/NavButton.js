import React from 'react';

const NavButton = (props) => {
    return (
        <div className='InlineBlock'>
            <button className="NavButton" type={props.buttonType}>{props.children}</button>
        </div >
    );
}

export default NavButton;