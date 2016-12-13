import React , {Component} from 'react';
import {connect} from 'react-redux'
import submittedAnswer from '../actions/submittedAnswer'

class Answer extends Component{

    componentWillMount(){
      this.props.submittedAnswer(false,null)
    }

    handleClick(){
      this.props.submittedAnswer(true,this.props.correct)
    }


    render(){
      return (
        <div className='answer-container' onClick={this.handleClick.bind(this)}>
          <div className='answer'>
            {this.props.text}
          </div>
        </div>
      )
  }

}

export default connect(null,{submittedAnswer})(Answer)
