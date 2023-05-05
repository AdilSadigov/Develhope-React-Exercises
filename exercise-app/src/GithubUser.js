import { useParams } from "react-router-dom"
import { useGithubUser } from "./useGithubUser"

export function GithubUser() {
    const { username } = useParams()
    const { data, loading, error, refetch } = useGithubUser(username)

    function handleGetUserData () {
        refetch()
    }

    return <div>
        <button onClick={handleGetUserData}>Load user data</button>
        {loading && <h1>Loading...</h1>}
        {error && <h1>There has been an error</h1>}
        {data && <h1>{data.name}</h1>}
    </div>
}