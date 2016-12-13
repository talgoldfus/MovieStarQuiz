import React , {Component} from 'react';
import {connect} from 'react-redux'
import submitedAnswer from '../actions/submitedAnswer'

class Answer extends Component{

    componentWillMount(){
      this.props.submitedAnswer(false,null)
    }

    handleClick(){
      this.props.submitedAnswer(true,this.props.correct)
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

export default connect(null,{submitedAnswer})(Answer)
