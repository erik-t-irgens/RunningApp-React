import React from "./React";

const Field = (props) => {
    return (
        <div>
            <FieldDisplay>{props.children}</FieldDisplay>
            <NavButton></NavButton>
        </div>
    );
}

export default Field;