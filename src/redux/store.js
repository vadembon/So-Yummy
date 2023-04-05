import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },
});
