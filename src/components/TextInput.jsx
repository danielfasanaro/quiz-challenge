import React from 'react';
import { useSelector } from 'react-redux';
import { string, func } from 'prop-types';

import './TextInput.css';

function TextInput({ children, id, onChange }) {
  const stateKey = useSelector((state) => state.userReducer[id]);

  return (
    <div className="input-text">
      <input
        className="input"
        type="text"
        id={ `${id}-text-input` }
        value={ stateKey }
        onChange={ onChange }
        placeholder={ children }
      />
    </div>
  );
}

TextInput.propTypes = {
  children: string,
  id: string,
  onChange: func,
}.isRequired;

export default TextInput;
