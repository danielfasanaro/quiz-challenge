import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import Title from '../../components/Title';
import CenterText from '../../components/CenterText';
import AnswerList from './AnswerList';
import Loading from '../../components/Loading';
import ErrorPage from '../../components/ErrorPage';
import { getQuestions, addRankingScore } from '../../redux/reducers';

function Quiz() {
  const dispatch = useDispatch();

  const {
    isLoading,
    questions,
    error,
    currentQuestion,
    endGame,
    updateRanking,
    score,
  } = useSelector((state) => state.quizReducer);

  const {
    user,
    token,
  } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getQuestions(token));
  }, [dispatch, token]);

  if (updateRanking) dispatch(addRankingScore({ user, score }));
  if (endGame) return <Redirect to="/results" />;
  if (isLoading) return <Loading>Loading Question...</Loading>;
  if (error) return <ErrorPage />;

  return (
    <>
      <Title>{ questions[currentQuestion].category }</Title>
      <CenterText>{ questions[currentQuestion].question }</CenterText>
      <AnswerList
        question={ questions[currentQuestion] }
      />
    </>
  );
}

export default Quiz;
