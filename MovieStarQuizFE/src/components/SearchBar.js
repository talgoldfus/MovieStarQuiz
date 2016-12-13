import React , {Component} from 'react';
import {connect} from 'react-redux'
import {grabQuizInfo}  from '../actions/grabFromAPI'
import submittedSearch from '../actions/submittedSearch'

class SearchBar extends Component {

  constructor(props){
    super(props)
    this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    let actor = this.refs.search.value.trim()
    this.props.grabQuizInfo(actor)
    this.props.submittedSearch(true)
    this.refs.search.value=""
  }

  render(){
    return (
        <form
            className="searchBar"
            onSubmit={ event =>this.handleSubmit(event)}>
              <input id="search" className="" ref='search' type="text" placeholder="  Search persona" />
        </form>
    );
  }

}

export default connect(null,{
  grabQuizInfo,
  submittedSearch})(SearchBar);
