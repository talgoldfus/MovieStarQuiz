import React , {Component} from 'react';
import {connect} from 'react-redux'
import {grabQuizInfo}  from '../actions/grabFromAPI'
import '../index.css'

class App extends Component {

  componentWillMount(){
    this.props.grabQuizInfo("Brad Pitt")
  }

  render(){
    return (
      <div className="app container">
        {this.props.children}
      </div>
    );
  }

}

export default connect(null,{grabQuizInfo})(App);
