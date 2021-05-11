import { createSlice } from '@reduxjs/toolkit';

import { fetchNewToken } from '../../services/triviaAPI';
import { getLocalToken, setLocalToken } from '../../services/token';

const INITIAL_USER_STATE = {
  user: '',
  token: getLocalToken() || '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_USER_STATE,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
    getTokenSuccess(state, action) {
      state.token = action.payload;
    },
    getTokenFailed(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  changeUser,
  getTokenSuccess,
  getTokenFailed,
} = userSlice.actions;

export const getToken = () => async (dispatch) => {
  try {
    const token = getLocalToken() || await fetchNewToken();
    setLocalToken(token);
    dispatch(getTokenSuccess(token));
  } catch (error) {
    dispatch(getTokenFailed(error));
  }
};

export default userSlice.reducer;
