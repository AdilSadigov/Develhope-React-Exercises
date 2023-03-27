import { useState } from "react"
import { Link, Route, Routes} from "react-router-dom"
import { GithubUser } from "./GithubUser"
import { ShowGithubUser } from "./ShowGithubUser"

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
        <Routes>
            {usernames.map((username, index) => (
            <Route key={index} path={`/users/${username}`} element={<ShowGithubUser username={username} />} />
            ))}
        </Routes>
        <ul>
            {usernames.map((username, index) => (
                <div>
                    <Link to={`/users/${username}`}>{username}</Link> <br/>
                </div>
            ))}
        </ul>
    </div>
} 