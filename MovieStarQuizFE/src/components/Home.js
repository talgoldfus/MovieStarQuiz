import React  from 'react';
import PlayNewGameButton from './PlayNewGameButton'
import SearchActorContainer from '../containers/SearchActorContainer'



const Home = props => {
    return (
      <div className="row">
        <div className="home col-xs-6 col-xs-offset-3">
          <div className="row">
            <h1>Movie Release Quiz</h1>
            <div className="col-xs-12">
              <h2>Start with a random actor</h2>
              <PlayNewGameButton buttonText={"START PLAYING"} className="startQuizButton col-xs-4 col-xs-offset-4"/>
            </div>
            <div className="col-xs-12">
              <h2>Or choose your favorite actor</h2>
              <SearchActorContainer className="col-xs-6 col-xs-offset-3" />
            </div>
          </div>
        </div>
      </div>
    );
}



export default Home
