import { createSlice } from '@reduxjs/toolkit';

import { fetchQuestions } from '../../services/triviaAPI';

const INITIAL_QUIZ_STATE = {
  isLoading: true,
  questions: [],
  error: '',
  answers: [],
  currentQuestion: 0,
  endGame: false,
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
    },
  },
});

export const {
  quizLoading,
  getQuestionsSuccess,
  getQuestionsFailed,
  addAnswer,
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
