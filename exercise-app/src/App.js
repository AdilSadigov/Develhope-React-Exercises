import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render () {
        const colorsList = [
            {id: 1, name: 'Blue'},
            {id: 2, name: 'Red'},
            {id: 3, name: 'Green'}
        ]

        return <TodoList/>
    }
}
