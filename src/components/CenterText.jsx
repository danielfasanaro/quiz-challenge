import React from 'react';
import { node } from 'prop-types';

function CenterText({ children }) {
  return <div className="center-text">{ children }</div>;
}

CenterText.propTypes = {
  children: node,
}.isRequired;

export default CenterText;
