import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(username, password, event) {
        event.preventDefault();
        console.log(username, password);
    }

    render () {
        return <Login onLogin={this.onLogin} />
    }
}
