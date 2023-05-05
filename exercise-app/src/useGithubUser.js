import useSWR from 'swr'

export function useGithubUser(username) {
    let url = `https://api.github.com/users/${username}`
    if (username == null || username == undefined) {
        url = null
    }
    
    const { data, error, mutate } = useSWR(url)

    function fetchGithubUser() {
        mutate()
    }
    
    return { data, error, loading: !data && !error, onFetchUser: fetchGithubUser}
}