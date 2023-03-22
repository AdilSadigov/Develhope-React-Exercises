import React from "react";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render () {
        return <Counter initialValue = {0} incrementAmount = {1} incrementInterval ={1000}/>
    }
}
