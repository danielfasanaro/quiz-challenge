export {
  default as userReducer,
  getToken,
  changeUser,
} from './userSlice';

export {
  default as quizReducer,
  getQuestions,
  addRankingScore,
  addAnswer,
  restartGame,
  setRanking,
} from './quizSlice';
