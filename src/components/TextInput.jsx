import React from 'react';
import { useSelector } from 'react-redux';
import { string, func } from 'prop-types';

function TextInput({ children, id, onChange }) {
  const stateKey = useSelector((state) => state.userReducer[id]);

  return (
    <label htmlFor={ `${id}-text-input` }>
      { children }
      <input
        type="text"
        id={ `${id}-text-input` }
        value={ stateKey }
        onChange={ onChange }
      />
    </label>
  );
}

TextInput.propTypes = {
  children: string,
  id: string,
  onChange: func,
}.isRequired;

export default TextInput;
