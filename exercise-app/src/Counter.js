import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    componentDidMount () {

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

// The constructor is called only once when the component is created, 
// whereas componentDidMount is called every time the component is mounted in the DOM.
// If there are other variables or state that need to be initialized in the constructor, it may still be required