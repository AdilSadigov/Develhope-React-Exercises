import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
        disabled: true
    }

    handleInputChange = (event) => {
        
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked

        this.setState ({
            [name]: type === "checkbox" ? checked : value,
            disabled: (this.state.username == '' || this.state.password == '') ? true : false,
        })   
    }

    handleResetState = () => {
        this.setState ({
            username: '',
            password: '',
            remember: false
        })
    }

    render() {
        const LoginBtn = {
            background: this.state.password.length < 8 ? 'red' : 'green',
            marginLeft:'10px'
        }

        console.log(this.state.password.length)

        return <div>
            <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} style={{margin: '0px 10px'}}/>
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}/> 
            <button disabled={this.state.disabled} onClick={this.onLogin} style={LoginBtn}>Login</button>
            <button onClick={this.handleResetState} style={{marginLeft:'10px'}}>Reset</button>
        </div>
    }
}