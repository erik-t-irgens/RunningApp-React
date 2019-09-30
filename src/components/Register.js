import CTAButton from "./CTAButton.js";
import React from 'react';

export default function (props) {
    return (
        <div id="registerPage">
            <form>
                <Input labelFor="userName" inputType="text"></Input>
                <Input labelFor="userEmail" inputType="text"></Input>
                <Input labelFor="userPassword" inputType="text"></Input>
                <CTAButton>Register</CTAButton>
            </form>

            <CTAButton>Login Instead</CTAButton>
        </div>
    )
}