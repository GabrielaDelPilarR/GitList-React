
const BASE_API = 'https://api.github.com'

export async function fetchData(url){
    const response = await fetch(url)
    if(!response.ok){
        return{
            data: null,
            isError: true
        }
    }
    const data = await response.json()
    return{
        data,
        isError: false
    }

}

export async function getUser(username){
    return fetchData(`${BASE_API}/users/${username}`)
}

export async function getRepos(username){
    return fetchData(`${BASE_API}/users/${username}/repos`)
}