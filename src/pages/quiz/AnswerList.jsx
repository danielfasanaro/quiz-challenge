import React from 'react';
import { shape, string } from 'prop-types';

import AnswerButton from './AnswerButton';

function AnswerList({ question }) {
  const answers = [question.correct_answer, ...question.incorrect_answers]
    .sort()
    .reverse();

  function renderBooleanQuestion() {
    const booleanClassColor = {
      True: 'is-info',
      False: 'is-danger',
    };
    return (
      <div>
        {answers.map((answer) => (
          <AnswerButton
            key={ `${answer}-answer-button` }
            question={ question }
            color={ booleanClassColor[answer] }
          >
            {answer}
          </AnswerButton>
        ))}
      </div>
    );
  }

  return question.type === 'boolean' && renderBooleanQuestion();
}

AnswerList.propTypes = {
  question: shape({
    type: string,
  }),
}.isRequired;

export default AnswerList;
