import React from 'react';
import { string } from 'prop-types';

function Loading({ children }) {
  return <span className="loading">{ children }</span>;
}

Loading.propTypes = {
  children: string,
}.isRequired;

export default Loading;
