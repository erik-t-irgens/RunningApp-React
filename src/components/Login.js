import CTAButton from "./CTAButton.js";
import React from 'react';
import Input from "./Input.js";

export default function (props) {
    return (
        <div id="loginPage">
            <form>
                <Input labelFor="userName" inputType="text"></Input>
                <Input labelFor="userEmail" inputType="text"></Input>
                <Input labelFor="userPassword" inputType="text"></Input>
                <CTAButton>Login</CTAButton>
            </form>
            <p>Don't have an account?</p>
            <CTAButton>Register</CTAButton>
        </div>
    )
}