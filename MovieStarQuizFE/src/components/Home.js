import React  from 'react';
import ActorProfile from './ActorProfile'
import SearchBar from './SearchBar'

const Home = props => {
    return (
      <div className="row">
        <div className="home col-xs-6 col-xs-offset-3">
          <div className="row">
              <h1 className="gameHeadline">Movie Release Quiz</h1>
          </div>
          <ActorProfile />
          <div className="row">
            <h2 className="or">or</h2>
          </div>
          <div className="row">
              <h2>search your favorite movie persona</h2>
              <SearchBar/>
          </div>
        </div>
      </div>
    );
}

export default Home
