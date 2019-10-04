import CTAButton from "./CTAButton.js";

import React from 'react';

const Drawer = (props) => {
    return (
        <div>


            <CTAButton>SETTINGS</CTAButton>
            <CTAButton>LOG OUT</CTAButton>
            <CTAButton>PRIVACY</CTAButton>
        </div>
    );
}

export default Drawer;