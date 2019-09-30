import React from 'react';
import Card from "./Card.js";


export default function (props) {
    return (

        <div>
            {props.items.map((items, id) =>
                <Card visibleElement={items.image} name={items.name}></Card>
            )}
        </div>
    );
}