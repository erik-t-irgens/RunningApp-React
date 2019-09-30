import CTAButton from "./CTAButton.js";
import Avatar from ".Avatar.js";
import React from 'react';

const Drawer = (props) => {
    return (
        <div>
            <Avatar></Avatar>

            <CTAButton>SETTINGS</CTAButton>
            <CTAButton>LOG OUT</CTAButton>
            <CTAButton>PRIVACY</CTAButton>
        </div>
    );
}

export default Drawer;