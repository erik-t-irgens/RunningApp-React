import React from 'react';


export default function (props) {
    return (

        <div>
            {props.masterEnumerable.map((item, id) =>
                <Card visibleElement={item.image} name={item.name}></Card>
            )}
        </div>
    );
}