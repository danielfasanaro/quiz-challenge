import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaCheck, FaTimes } from 'react-icons/fa';

import Title from '../../components/Title';
import CenterText from '../../components/CenterText';
import Ranking from './Ranking';
import LinkButton from '../../components/LinkButton';
import ErrorPage from '../../components/ErrorPage';
import { restartGame } from '../../redux/reducers';

import './Results.css';

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
    const [correct, wrong] = ['has-text-link', 'has-text-danger'];
    return (
      <div className="results-container">
        {answers.map(({ question, isCorrect }) => (
          <span key={ question } className={ isCorrect ? correct : wrong }>
            {isCorrect ? <FaCheck /> : <FaTimes />}
            {` - ${question}`}
          </span>
        ))}
      </div>
    );
  }

  if (!token) return <ErrorPage>Please restart game to create a new session</ErrorPage>;

  return (
    <div className="results-container">
      <Title>{`${user || 'Unknown'} your score is ${score}%`}</Title>
      <CenterText>
        {renderQuestionsAndResults()}
        <Ranking />
      </CenterText>
      <LinkButton
        path="/"
        onClick={ () => dispatch(restartGame()) }
      >
        Play Again!
      </LinkButton>
    </div>
  );
}

export default Results;
