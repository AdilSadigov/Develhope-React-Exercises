import React from "react";

const sum = (a, b) => a + b; 

export class App extends React.Component {
    render () {
        return <h2>{sum(8,6)}</h2>
    }
}