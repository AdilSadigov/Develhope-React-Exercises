import React, { useState } from "react";

export function Login({onLogin}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const handleInputChange = (event) => {       
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked

        if (name === 'username') {
            setUsername(value);
        } 
        else if (name === 'password') {
            setPassword(value);
        } 
        else if (name === 'remember') {
            setRemember(checked);
        }
      
        setDisabled(username === '' || password === '');   
    }
        return <div>
            <input name="username" value={username} onChange={handleInputChange}/>
            <input name="password" type="password" value={password} onChange={handleInputChange} style={{margin: '0px 10px'}}/>
            <input name="remember" type="checkbox" checked={remember} onChange={handleInputChange}/> 
            <button disabled={disabled} onClick={(event) => {onLogin(username, password, event)}} style={{marginLeft:'10px'}}>Login</button>
        </div>
}