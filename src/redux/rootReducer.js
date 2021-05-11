import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './reducers';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
