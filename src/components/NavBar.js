import React from 'react';
import NavButton from "./NavButton.js";

const NavBar = (props) => {
    return (
        <div className="NavBar">
            <NavButton></NavButton>
            <NavButton></NavButton>
            <NavButton></NavButton>
            <NavButton></NavButton>
        </div>
    );
}

export default NavBar;

