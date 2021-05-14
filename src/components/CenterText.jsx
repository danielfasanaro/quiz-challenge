import React from 'react';
import { node } from 'prop-types';

import './CenterText.css';

function CenterText({ children }) {
  return <div className="center-text">{ children }</div>;
}

CenterText.propTypes = {
  children: node,
}.isRequired;

export default CenterText;
