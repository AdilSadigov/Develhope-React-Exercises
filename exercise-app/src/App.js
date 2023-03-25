import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { DisplayLanguage } from "./DisplayLanguage";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { Sum } from "./Sum";

export class App extends React.Component {
    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState ({
            language: event.target.value
        })
    }

    render () {
        return (
            <div>
                <Sum numbers = {[1, 2, 3, 4, 5, 6, 7]}/>
            </div>
        )
    }
}
