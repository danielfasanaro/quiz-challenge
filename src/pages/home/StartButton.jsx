import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

function StartButton({ onClick }) {
  return (
    <Link to="/quiz">
      <button type="button" onClick={ onClick }>START</button>
    </Link>
  );
}

StartButton.propTypes = {
  onClicl: func,
}.isRequired;

export default StartButton;
