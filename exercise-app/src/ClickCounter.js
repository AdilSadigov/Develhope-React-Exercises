import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    counterIncrement = () => {
        this.setState((state) => {
            return {
                count: state.count + this.props.incrementBy
            }
        })
    }

    render () {
        return <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.counterIncrement}>Click Me!</button>
        </div>
    }
}

ClickCounter.defaultProps = {
    incrementBy: 1,
    initialValue: 0  
}