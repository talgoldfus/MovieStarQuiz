import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import actorReducer from './actorReducer'
import gameReducer from './gameReducer'


const rootReducer = combineReducers({
  actor: actorReducer,
  movies: moviesReducer,
  game: gameReducer
})


export default rootReducer
