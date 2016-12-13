import axios from 'axios'

export const getActorDetails = (actorName) => {
    return axios({
        url: 'http://localhost:3000/api/v1/actors/',
        method: 'get',
        params: { actor: actorName },
    }).then((response) => {
        return {
            type: 'GET_ACTOR_FROM_API',
            payload: response.data.results
        }
    })
}


export const getActorMovies= (actorName) => {
    return axios({
        url: 'http://localhost:3000/api/v1/movies/',
        method: 'get',
        params: { actor: actorName },
    }).then((response) => {
        return {
            type: 'GET_MOVIES_FROM_API',
            payload: response.data.results
        }
    })
}
