import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render () {
        return <Welcome name = {<strong>Adil</strong>} age = {23}/>
    }
}

// If the prop is a JSX expression instead of a string, you need to use curly braces