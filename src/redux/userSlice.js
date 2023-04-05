import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload;
    },
    clearUser: state => {
      state.token = '';
    },
  },
});

export default userSlice;
export const { setUser, clearUser } = userSlice.actions;
