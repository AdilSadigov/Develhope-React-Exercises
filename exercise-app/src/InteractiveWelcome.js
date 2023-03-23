import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        username: 'Adil'
    }

    handleUsernameChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState ({
            [name]: value
        })
    }

    render() {
        return <div>
            <input name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
            <Welcome name={this.state.username}/>
        </div>
    }
}