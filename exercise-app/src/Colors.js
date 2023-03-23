import React from "react";


export class Colors extends React.Component {
    
    render () {
        return (
            <ul>
                {this.props.colors.map((color) => <li key={color.id}>{color.name}</li>)}
            </ul>
        )
    }
}