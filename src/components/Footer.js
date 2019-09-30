import React from 'react';

const Footer = (props) => {
    return (
        <div className="Footer">
            {/* Pass in a DateTime interval function as a child. */}
            <p>DwoDash - &#169; {props.children} </p>
        </div>
    );
}

export default Footer;