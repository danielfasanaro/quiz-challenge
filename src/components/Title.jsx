import React from 'react';
import { string } from 'prop-types';

function Title({ children }) {
  return <span className="title">{ children }</span>;
}

Title.propTypes = {
  children: string,
}.isRequired;

export default Title;
