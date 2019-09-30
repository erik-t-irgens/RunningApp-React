import React from 'react';
import NavBar from "./NavBar.js";
import Avatar from "./Avatar.js";

const Header = (props) => {
    return (
        <div id="Header">
            <Avatar></Avatar>
            <NavBar></NavBar>
        </div>
    );
}

export default Header;
