import React  from 'react';
import {connect} from 'react-redux'
import PlayNewGameButton from './PlayNewGameButton'

const ActorProfile = props => {
    return (
      <div>
      <div className="row">
      {props.actor.profile_path ?
        <img
          className="actorProfile"
          alt={props.actor.name}
          src={props.actor.profile_path}
        /> :
        null
      }
      </div>
      <div className="row">
      <PlayNewGameButton buttonText={"START PLAYING " + props.actor.name.toUpperCase() + " MOVIES"}/>
      </div>
      </div>
    );

}

function mapStateToProps(state){
  return {
    actor: state.actor.details,
  }
}

export default connect(mapStateToProps,null)(ActorProfile);
