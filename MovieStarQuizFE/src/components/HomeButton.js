import React  from 'react';
import {browserHistory} from 'react-router'

const handleClick = () => browserHistory.push(`/`)

const HomeButton = props => {
    return (
      <button type="button" className="homeButton" onClick={handleClick}>
        {props.buttonText}
      </button>
    );
}



export default HomeButton
