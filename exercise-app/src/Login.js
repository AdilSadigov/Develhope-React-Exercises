import React, { useEffect, useState } from "react";
import { useLogin } from "./useLogin";

export function Login({onLogin}) {
    const { username, password, onUsernameChange, onPasswordChange } = useLogin();
    const [remember, setRemember] = useState(false);

    const handleRememberChange  = (event) => {
        setRemember(event.target.checked);
    }

    return <div>
        <input name="username" value={username} onChange={onUsernameChange} />
        <input name="password" type="password" value={password} onChange={onPasswordChange} style={{ margin: '0px 10px' }} />
        <input name="remember" type="checkbox" checked={remember} onChange={handleRememberChange} />
        <button onClick={(event) => {onLogin(username, password, event)}} disabled={!username || !password} style={{ marginLeft: '10px' }}>Login</button>
    </div>
}