import React , {Component} from 'react';
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import getMovieQuiz from '../actions/getMovieQuiz'
import submitedAnswer from '../actions/submitedAnswer'


class PlayNewGameButton extends Component{

    handleClick(){
      let randIndex = Math.floor(Math.random() * this.props.movieList.length)
      let movieID = this.props.movieList[randIndex].id
      this.props.getMovieQuiz(movieID)
      this.props.submitedAnswer(false,null)
      browserHistory.push(`/quiz/${movieID}`)
    }

    render(){
      return (
          <button type="button" className={this.props.className} onClick={this.handleClick.bind(this)}>
            {this.props.buttonText}
          </button>
    );
  }

}

function mapStateToProps(state){
  return {movieList: state.movies.movieList}
}

export default connect(mapStateToProps,{getMovieQuiz,submitedAnswer})(PlayNewGameButton);
