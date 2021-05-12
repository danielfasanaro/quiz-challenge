import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

function StartButton({ onClick, path, children }) {
  return (
    <Link to={ path }>
      <button type="button" onClick={ onClick }>{ children }</button>
    </Link>
  );
}

StartButton.propTypes = {
  onClick: func,
}.isRequired;

export default StartButton;
