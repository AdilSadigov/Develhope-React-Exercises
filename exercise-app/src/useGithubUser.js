import useSWR from 'swr'

export function useGithubUser(username) {
    let url = `https://api.github.com/users/${username}`
    if (username == null || username == undefined) {
        url = null
    }
    
    const { data, error, mutate } = useSWR(url)

    function refetch () {
        mutate()
    }
    
    return { data, error, loading: !data && !error, refetch }
}