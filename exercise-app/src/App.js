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
import { Route, Routes } from "react-router-dom";

export function App() {

    return (
        <Routes>
            <Route path="/" element={<Welcome name="Adil"/>} />
            <Route path="/counter" element={<Counter/>} />
        </Routes>
    )
}