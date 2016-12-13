import axios from 'axios'

function retrySearch(error){
    alert("Are you sure you typed the right name? Please try again")
}

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
    },
    () => {
      retrySearch()
      return {
          type: 'SUBMITTED_SEARCH',
          payload: false
      }
    }
  )
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
