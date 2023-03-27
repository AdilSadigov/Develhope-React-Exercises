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
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome name="Adil"/>} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/users/:username" element={<ShowGithubUser />} />
                <Route path="*" element={<h3>Not Found</h3>} />
                <Route path="/users" element={<div><h2>Add a user and select it</h2><GithubUserList /></div>}/>
            </Routes>
            <Link to ="/">Home </Link> <br/>
            <Link to ="counter">Counter </Link> <br/>
            <Link to ="users">Users </Link>
        </div>
    )
}