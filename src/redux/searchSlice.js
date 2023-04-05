import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  searchType: 'title',
  searchResult: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,

  reducers: {
    updateSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    updateSearchResult(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { updateSearchQuery, updateSearchResult } = searchSlice.actions;

export default searchSlice;
