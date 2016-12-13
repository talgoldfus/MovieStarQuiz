import React  from 'react';
import PlayNewGameButton from './PlayNewGameButton'
import SearchActorContainer from '../containers/SearchActorContainer'

const Home = props => {
    return (
      <div className="row">
        <div className="home col-xs-6 col-xs-offset-3">
          <div className="row">
            <h1 className="col-xs-10 col-xs-offset-1">Movie Release Quiz</h1>
            <div className="col-xs-10 col-xs-offset-1">
              <PlayNewGameButton buttonText={"QUICK START"} className="startQuizButton col-xs-4 col-xs-offset-4"/>
            </div>
            <div className="col-xs-10 col-xs-offset-1">
              <h2>Or choose your favorite actor</h2>
              <SearchActorContainer className="col-xs-6 col-xs-offset-3" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home
