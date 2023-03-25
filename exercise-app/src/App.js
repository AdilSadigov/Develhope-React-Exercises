import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render () {
        // const colorsList = [
        //     {id: 1, name: 'Blue'},
        //     {id: 2, name: 'Red'},
        //     {id: 3, name: 'Green'}
        // ]

        return (
            <TodoList> 
                {(items, removeItem) => {
                    return (
                        <ul>
                            {items.map((item, index) => (
                                <li key={index} style={{marginBottom: '8px'}}>
                                    {item} 
                                    <button onClick={() => removeItem(index)} style={{marginLeft: '10px'}}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    )
                }}
            </TodoList>
        )
    }
}
