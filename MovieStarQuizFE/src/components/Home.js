import React  from 'react';
import PlayNewGameButton from './PlayNewGameButton'


const Home = props => {
    return (
      <div className="row">
        <div className="home col-xs-6 col-xs-offset-3">
          <div className="row">
            <PlayNewGameButton buttonText={'Start quiz'} className="startQuizButton col-xs-4 col-xs-offset-4"/>
          </div>
        </div>
      </div>
    );
}



export default Home
