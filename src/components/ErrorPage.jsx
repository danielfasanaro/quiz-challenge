import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

function ErrorPage({ children }) {
  return (
    <>
      <span>{ children }</span>
      <Link to="/">Back to Initial Page</Link>
    </>
  );
}

ErrorPage.propTypes = {
  children: string,
}.isRequired;

export default ErrorPage;
