import React from 'react';
import Gallery from "./Gallery";
import Styles from "../styles/Styles.css";

export default function (props) {
    return (
        <div>
            <div className='primaryColor'>a</div>
            <div className='secondaryColor'>b</div>
            <div className='tertiaryColor'>c</div>
            <div className='quaternaryColor'>d</div>
            <div className='quinaryColor'>e</div>


            <Gallery items={props.tracks}></Gallery>
            <Gallery items={props.events}></Gallery>
            <Gallery items={props.users}></Gallery>
        </div>
    )
}