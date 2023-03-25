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

    removeAllItems = () => {
        this.setState ({
            items: []
        })
    }

    removeItem = (index) => {
        this.setState ((prev) => ({
            items: prev.items.filter((item, i) => i != index)
        }))
    }

    render () {
        return (
            <div>
                <input name="todoInput" value={this.state.input} onChange={this.handleChange}/>
                <button onClick={this.addItem} style={{marginLeft: '10px'}}>Add to list</button>
                <button onClick={this.removeAllItems} style={{marginLeft: '10px'}}>Reset</button>
                <h3>Todo List:</h3>

                {this.props.render(this.state.items, this.removeItem)}

                {/* <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index} style={{marginBottom: '8px'}}>
                            {item} 
                            <button onClick={() => this.removeItem(index)} style={{marginLeft: '10px'}}>Remove</button>
                        </li>
                    ))}
                </ul> */}
                
            </div>
        )
    }
}