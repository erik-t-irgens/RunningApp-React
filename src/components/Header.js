import React from 'react';
import NavBar from "./NavBar.js";

const Header = (props) => {
    return (
        <div id="Header">
            <NavBar>{props.children}</NavBar>
        </div>
    );
}

export default Header;
