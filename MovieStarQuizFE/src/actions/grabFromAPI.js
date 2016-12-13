import axios from 'axios'
import { batchActions } from 'redux-batched-actions';

export const grabQuizInfo = (actorName) => {
    return axios({
        url: 'http://localhost:3000/api/v1/actors/',
        method: 'get',
        params: { actor: actorName },
    }).then((response) => {
        response.data.defaulted ?  alert("We couldn't find your persona , you will have to deal with Liam Neeson") : null
        return batchActions([{
            type: 'GET_ACTOR_FROM_API',
            payload: response.data.actor.results
        },{
          type: 'GET_MOVIES_FROM_API',
          payload: response.data.movies.results
        }
      ])
    },
    () => {
      alert("There are too many results for your search ? Please try again")
      return {
          type: 'SUBMITTED_SEARCH',
          payload: false
      }
    }
  )
}
