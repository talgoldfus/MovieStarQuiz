import React , {Component} from 'react';
import {connect} from 'react-redux'
import {getActorMovies,getActorDetails}  from '../actions/grabFromAPI'
import submittedSearch from '../actions/submittedSearch'

class SearchBar extends Component {

  constructor(props){
    super(props)
    this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    let actor = this.refs.search.value.trim()
    this.props.getActorDetails(actor)
    this.props.getActorMovies(actor)
    this.props.submittedSearch(true)
    this.refs.search.value=""
  }

  render(){
    return (
      <form
          className="searchBar col-xs-12"
          onSubmit={ event =>this.handleSubmit(event)}>
            <input id="search" className="col-xs-offset-2 col-xs-6" ref='search' type="text" placeholder="Search Actors" />
      </form>
    );
  }

}


export default connect(null,{
  getActorMovies,
  getActorDetails,
  submittedSearch})(SearchBar);
