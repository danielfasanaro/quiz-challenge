import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaCheck, FaTimes } from 'react-icons/fa';

import Title from '../../components/Title';
import CenterText from '../../components/CenterText';
import Ranking from './Ranking';
import LinkButton from '../../components/LinkButton';
import ErrorPage from '../../components/ErrorPage';
import { restartGame } from '../../redux/reducers';

function Results() {
  const dispatch = useDispatch();

  const {
    score,
    answers,
  } = useSelector((state) => state.quizReducer);

  const {
    user,
    token,
  } = useSelector((state) => state.userReducer);

  function renderQuestionsAndResults() {
    return (
      <div className="results-container">
        {answers.map(({ question, isCorrect }) => (
          <span key={ question } className="results-question">
            {isCorrect ? <FaCheck /> : <FaTimes />}
            {` - ${question}`}
          </span>
        ))}
      </div>
    );
  }

  if (!token) return <ErrorPage>Please restart game to create a new session</ErrorPage>;

  return (
    <>
      <Title>{`${user || 'Unknown'} your score is:${score}%`}</Title>
      <CenterText>{renderQuestionsAndResults()}</CenterText>
      <Ranking />
      <LinkButton
        path="/"
        onClick={ () => dispatch(restartGame()) }
      >
        Play Again!
      </LinkButton>
    </>
  );
}

export default Results;
