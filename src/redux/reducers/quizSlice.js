import { createSlice } from '@reduxjs/toolkit';

import { fetchQuestions } from '../../services/triviaAPI';

const INITIAL_QUIZ_STATE = {
  answers: [],
  currentQuestion: 0,
  error: '',
  endGame: false,
  isLoading: true,
  questions: [],
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: INITIAL_QUIZ_STATE,
  reducers: {
    quizLoading(state) {
      state.isLoading = true;
      state.error = '';
    },
    getQuestionsSuccess(state, action) {
      state.questions = action.payload;
      state.isLoading = false;
    },
    getQuestionsFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    addAnswer(state, action) {
      const { question, answer } = action.payload;
      const newAnswer = {
        question: question.question,
        isCorrect: answer === question.correct_answer,
      };
      state.currentQuestion += 1;
      state.answers.push(newAnswer);
      state.endGame = state.currentQuestion >= state.questions.length;

      const correctAnswers = state.answers.reduce(
        (sum, { isCorrect }) => (isCorrect ? sum + 1 : sum),
        0,
      );
      state.score = (correctAnswers / state.questions.length) * 100;
    },
    restartGame(state) {
      state.answers = [];
      state.currentQuestion = 0;
      state.endGame = false;
      state.error = '';
      state.isLoading = true;
      state.questions = [];
      state.score = 0;
    },
  },
});

export const {
  quizLoading,
  getQuestionsSuccess,
  getQuestionsFailed,
  addAnswer,
  restartGame,
} = quizSlice.actions;

export const getQuestions = (token) => async (dispatch) => {
  try {
    dispatch(quizLoading());
    const questions = await fetchQuestions(token);
    dispatch(getQuestionsSuccess(questions));
  } catch (error) {
    dispatch(getQuestionsFailed(error));
  }
};

export default quizSlice.reducer;
