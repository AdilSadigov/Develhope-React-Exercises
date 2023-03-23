import React from "react";

export class ClickTracker extends React.Component {
    showLastPressedButton = (event) => {
        document.getElementById("h1").innerText = `Last pressed button is: ${event.target.name}`
    }


    render () {
        return <div>
            <h1 id="h1">Click on some button</h1>
            <button name='Button-1' onClick={this.showLastPressedButton}>Button-1</button>
            <button name='Button-2' onClick={this.showLastPressedButton} style={{margin: '0px 20px'}}>Button-2</button>
            <button name='Button-3' onClick={this.showLastPressedButton}>Button-3</button>
        </div>
    }
}