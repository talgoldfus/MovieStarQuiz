import React , {Component} from 'react';
import {connect} from 'react-redux'
import PlayNewGameButton from '../components/PlayNewGameButton'
import HomeButton from '../components/HomeButton'
import Quiz from '../components/Quiz'

class QuizContainer extends Component {

  renderResult(movie){

    return (
      <div className="row">
        <h2 className="col-xs-8 col-xs-offset-2">Your answer is {this.props.correct ? "correct" : "wrong"}</h2>
        <h3 className="col-xs-8 col-xs-offset-2">{movie.title} was released on {movie.release_date.toDateString().substring(4)}</h3>
      </div>
    )
  }

  renderReplay(){
      return(
        <div className="row">
          <div className="col-xs-3 col-xs-offset-2">
              <PlayNewGameButton
              buttonText={'PLAY ANOTHER ROUND'}
              className="replyQuizButton"/>
          </div>
          <div className="col-xs-3">
              <HomeButton
               buttonText={'CHOOSE NEW ACTOR'}
              />
          </div>
        </div>
      )
    }

  renderQuestion(){
    return <h2 className="col-xs-8 col-xs-offset-2">When was {this.props.movie.title} released ? </h2>
  }

  render(){

    return (
      <div className="row">
        <div className="quizContainer col-xs-8 col-xs-offset-2  col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-3.5">
          <div className="row">
            {this.props.movie && !this.props.answered ?  this.renderQuestion() : null}
            <img
              className="posterBackground col-xs-12"
              alt={this.props.movie.title}
              src={this.props.movie.poster_path}
            />
            {this.props.movie && !this.props.answered ? <Quiz movie={this.props.movie} /> : this.renderResult(this.props.movie) }
          </div>
          {this.props.answered ? this.renderReplay() : null }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    movie: state.movies.movieQuiz,
    answered: state.game.answered,
    correct: state.game.userAnsweredCorrect}
};

export default connect(mapStateToProps,null)(QuizContainer)
