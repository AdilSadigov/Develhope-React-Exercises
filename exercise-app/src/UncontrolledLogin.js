import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    _formRef = createRef() 

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render() {
        return <div>
            <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                <input name="username"/>
                <input name="password" type="password" style={{margin: '0px 10px'}}/>
                <input name="remember" type="checkbox"/>

                <button type="submit" style={{margin: '0px 10px'}}>Login</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    }
}