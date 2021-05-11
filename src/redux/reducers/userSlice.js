import { createSlice } from '@reduxjs/toolkit';

const INITIAL_USER_STATE = {
  user: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_USER_STATE,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const {
  changeUser,
} = userSlice.actions;

export default userSlice.reducer;
