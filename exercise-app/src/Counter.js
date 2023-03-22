import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    constructor (props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                const newValue = state.count + this.props.incrementAmount
                if (newValue > (this.props.initialValue * 10)) {
                    return {
                        count: this.props.initialValue
                    }
                }
                else {
                    return {
                        count: newValue
                    }
                }
            })
        }, this.props.incrementInterval);
    }

    render () {
        return <CounterDisplay count = {this.state.count}/>
    }
}