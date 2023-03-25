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
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                    <option value="ru">Русский</option>
                    <option value="tr">Türkçe</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage/>
                </LanguageContext.Provider>
            </div>
        )
    }
}
