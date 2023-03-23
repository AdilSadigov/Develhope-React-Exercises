import React from "react";

export class TodoList extends React.Component {
    state = {
        items: [],
        input: ''
    }

    addItem = () => {
        const newItem = this.state.input

        if (newItem != '') {
            this.setState ((prev) => ({
                items: [...prev.items, newItem],
                input: ''
            }))
        }
    }

    handleChange = (event) => {
        this.setState ({
            input: event.target.value
        })
    }

    render () {
        return (
            <div>
                <input name="todoInput" value={this.state.input} onChange={this.handleChange}/>
                <button onClick={this.addItem} style={{marginLeft: '10px'}}>Add to list</button>
                <ul>
                    {this.state.items.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
        )
    }
}