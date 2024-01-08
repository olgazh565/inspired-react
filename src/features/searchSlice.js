import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    openSearch: false,
  },
  reducers: {
    toggleOpenSearch(state) {
      state.openSearch = !state.openSearch;
    }
  }
});

export default searchSlice.reducer;
export const {toggleOpenSearch} = searchSlice.actions;