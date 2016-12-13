import React , {Component} from 'react';
import {connect} from 'react-redux'
import PlayNewGameButton from '../components/PlayNewGameButton'
import SearchBar from '../components/SearchBar'

 class SearchActorContainer extends Component {

   shouldComponentUpdate(nextProps, nextState){
     return !(nextProps.actor.name === this.props.actor.name)
   }

    render(){
      return(
        this.props.searchResults ?
        <PlayNewGameButton buttonText={"START PLAYING " + this.props.actor.name.toUpperCase() + " MOVIES"}/>
        : <SearchBar className="col-xs-4 col-xs-offset-4"/>
      )
    }
  }

function mapStateToProps(state){
  return {
    actor: state.actor.details,
    searchResults: state.game.submittedSearch
  }
}

export default connect(mapStateToProps,null)(SearchActorContainer);
