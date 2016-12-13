import React from 'react';
import Answer from './Answer'

const Quiz = (props) => {

    const {movie} = props

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

export default Quiz
