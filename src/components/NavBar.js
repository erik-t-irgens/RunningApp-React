import React from 'react';
import NavButton from "./NavButton.js";
import Avatar from "./Avatar.js";

const NavBar = (props) => {
    return (
        <div className="NavBar">
            <div><Avatar></Avatar></div>
            <div>
                <NavButton buttonType={}></NavButton>
                <NavButton buttonType={}></NavButton>
                <NavButton buttonType={}></NavButton>
                <NavButton buttonType={}></NavButton>
            </div>
        </div>
    );
}

export default NavBar;

