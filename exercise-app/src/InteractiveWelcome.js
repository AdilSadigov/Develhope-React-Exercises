import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        username: 'Adil',
        password: '',
        remember: false
    }

    handleUsernameChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState ({
            [name]: type === "checkbox" ? checked : value
        })
    }

    render() {
        return <div>
            <input name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
            <input name="password" type="password" value={this.state.password} onChange={this.handleUsernameChange} style={{margin: '0px 10px'}}/>
            <input name="remember" type="checkbox" value={this.state.remember} onChange={this.handleUsernameChange}/>
            <Welcome name={this.state.username}/>
        </div>
    }
}