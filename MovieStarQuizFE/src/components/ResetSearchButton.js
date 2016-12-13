import React  from 'react';
import {connect} from 'react-redux'
import submittedSearch from '../actions/submittedSearch'

const ResetSearchButton = props => {

  const handleClick = () => props.submittedSearch(false)

    return (
      <button type="button" className="resetSearchButton" onClick={handleClick}>
        Reset Search
      </button>
    );
}



export default connect(null,{submittedSearch})(ResetSearchButton);
