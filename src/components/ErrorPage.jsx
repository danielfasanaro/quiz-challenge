import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

import './ErrorPage.css';

function ErrorPage({ children }) {
  return (
    <div className="error-page-container">
      <span>{ children }</span>
      <Link to="/">Back to Initial Page</Link>
    </div>
  );
}

ErrorPage.propTypes = {
  children: string,
}.isRequired;

export default ErrorPage;
