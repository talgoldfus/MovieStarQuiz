import  React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Quiz from './components/Quiz'



export default (store)=>{
  return(
        <div>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="quiz/:id" component={Quiz} />
          </Route >
        </div>
  )
}
