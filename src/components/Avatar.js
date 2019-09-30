import React from 'react';

const Avatar = (props) => {
    return (
        <div className="Avatar">
            <img src={props.imageSource} alt='An image of // somehow put in props.userName'></img>
        </div>
    );
}

export default Avatar;