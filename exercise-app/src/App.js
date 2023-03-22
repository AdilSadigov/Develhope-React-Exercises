import React from "react";
import { Welcome } from "./Welcome";

Welcome.defaultProps = {
    name: "Adil"
}

export class App extends React.Component {
    render () {
        return <Welcome />
    }
}