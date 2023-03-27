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
import { Link, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome name="Adil"/>} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/users/:username" element={<ShowGithubUser />} />
            </Routes>
            <Link to ="/">Home </Link> <br/>
            <Link to ="counter">Counter </Link> <br/>
            <Link to ="users/AdilSadigov">Users </Link>
        </div>
    )
}