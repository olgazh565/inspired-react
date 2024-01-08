import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CATEGORY_URL} from '../const';

export const fetchNavigaton = createAsyncThunk(
  'navigation/fetchNavigation',
  async () => {
    const response = await fetch(CATEGORY_URL);
    const data = await response.json();

    return data;
  }
);

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    activeGender: 'women',
    status: '',
    error: null,
    categories: {},
    genderList: [],
  },
  reducers: {
    setActiveGender: (state, action) => {
      state.activeGender = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavigaton.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchNavigaton.fulfilled, (state, action) => {
        state.status = 'success';
        state.categories = action.payload;
        state.genderList = Object.keys(action.payload);        
      })
      .addCase(fetchNavigaton.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default navigationSlice.reducer;
export const {setActiveGender} = navigationSlice.actions;
