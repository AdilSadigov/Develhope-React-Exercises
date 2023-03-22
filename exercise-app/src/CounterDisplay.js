import React from "react";

export class CounterDisplay extends React.Component {
    render() {
        return <h1>{this.props.count}</h1>
    }
}

// I hope I understand the question correctly