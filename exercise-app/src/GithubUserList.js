import { useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList({error}) {

    const [usernames, setUsernames] = useState([])

    function handleAddNewUser(event) {
        event.preventDefault()
        const input = event.target.elements.username
        const newUsername = input.value.trim()
        if (newUsername) {
            setUsernames([...usernames, newUsername])
            input.value = ''
        }

        console.log(error)
    }

    return <div>
        <form onSubmit={handleAddNewUser}>
            <input name="username"/>
            <button type="submit">Add new user</button>
        </form>
        <ul>
            {usernames.map((username, index) => (
                <li key={index}>
                    <GithubUser username={username} />
                </li>
            ))}
        </ul>
    </div>
} 