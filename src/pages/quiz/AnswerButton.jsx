import React from 'react';
import { string } from 'prop-types';
import { useDispatch } from 'react-redux';

import { addAnswer } from '../../redux/reducers';

function AnswerButton({ children, question }) {
  const dispatch = useDispatch();

  function onAnswerClick() {
    dispatch(addAnswer({ question, answer: children }));
  }

  return (
    <button type="button" onClick={ onAnswerClick }>
      {children}
    </button>
  );
}

AnswerButton.propTypes = {
  children: string,
}.isRequired;

export default AnswerButton;
