import  React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import QuizContainer from './containers/QuizContainer'

export default (store)=>{
  return(
        <div>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="quiz/:id" component={QuizContainer} />
          </Route >
        </div>
  )
}
