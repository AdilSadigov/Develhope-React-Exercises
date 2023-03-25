import React from "react";

export class Container extends React.Component {
    render () {
        const containerStyle = {
            backgroundColor: 'white',
            border: '2px solid red',
        };

        return (
            <div className="container" style={containerStyle}>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}