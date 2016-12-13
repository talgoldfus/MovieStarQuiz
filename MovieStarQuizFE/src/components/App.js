import React , {Component} from 'react';
import {connect} from 'react-redux'
import {getActorMovies,getActorDetails}  from '../actions/grabFromAPI'
import '../index.css'

class App extends Component {

  componentWillMount(){
    this.props.getActorDetails("Brad Pitt")
    this.props.getActorMovies("Brad Pitt")
  }

  render(){
    return (
      <div className="app container">
        {this.props.children}
      </div>
    );
  }

}

export default connect(null,{getActorMovies,getActorDetails})(App);
