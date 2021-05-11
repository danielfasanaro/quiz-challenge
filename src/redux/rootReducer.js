import { combineReducers } from '@reduxjs/toolkit';

import { userReducer, quizReducer } from './reducers';

const rootReducer = combineReducers({
  userReducer,
  quizReducer,
});

export default rootReducer;
