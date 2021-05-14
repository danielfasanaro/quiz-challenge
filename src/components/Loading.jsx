import React from 'react';
import { string } from 'prop-types';

import './Loading.css';

function Loading({ children }) {
  return <p className="loading-message">{ children }</p>;
}

Loading.propTypes = {
  children: string,
}.isRequired;

export default Loading;
