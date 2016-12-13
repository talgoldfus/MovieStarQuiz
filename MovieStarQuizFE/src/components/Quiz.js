import React , {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import Answer from './Answer'
import PlayNewGameButton from './PlayNewGameButton'
import HomeButton from './HomeButton'


class Quiz extends Component {

  renderQuiz(movie){

    var answers =[]
    answers.push(
      <Answer
      text={`${movie.release_date.toDateString().substring(4)}`}
      correct={true}
      key={movie.id}
      />
    )

      for (let i = 3 ; i ; i--){
        let min  = new Date(new Date().setFullYear(movie.release_date.getFullYear() -3))
        let max = movie.release_date.getFullYear() > 2013 ? new Date() : new Date(new Date().setFullYear(movie.release_date.getFullYear() +3))
        let date = new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
        answers.push(
          <Answer
            text={`${date.toDateString().substring(4)}`}
            correct={false}
            key={movie.id+i}
          />
        )
      }

      for (let i = answers.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [answers[i - 1], answers[j]] = [answers[j], answers[i - 1]];
      }

      return(
        <div className="quizQuestions col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3">
            { answers}
        </div>
      )
  }

  renderResult(movie){

    return (
      <div>
        <h2>Your answer is {this.props.correct ? "correct" : "wrong"}</h2>
        <h3>{movie.title} was released on {movie.release_date.toDateString().substring(4)}</h3>
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

  render(){

    return (
      <div className="row">
        <div className="quizContainer col-xs-8 col-xs-offset-2  col-sm-6 col-sm-offset-3 col-md-5 col-md-offset-3.5">
          <div className="row">
            {this.props.movie && !this.props.answered ? <h3 className="col-xs-8 col-xs-offset-2">When was {this.props.movie.title} released ? </h3> : null}
            <img className="posterBackground col-xs-12" alt={this.props.movie.title} src={this.props.movie.poster_path} />
            {this.props.movie && !this.props.answered ? this.renderQuiz(this.props.movie) : this.renderResult(this.props.movie) }
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

const QuizContainer = connect(mapStateToProps,null)(Quiz)

export default withRouter(QuizContainer)
