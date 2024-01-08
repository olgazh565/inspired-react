import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {COLORS_URL} from '../const';

export const fetchColors = createAsyncThunk(
  'colors/fetchColors',
  async () => {
    const response = await fetch(COLORS_URL);
    const data = await response.json();

    return data;
  }
);

const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    status: '',
    colorList: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchColors.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.status = 'success';
        state.colorList = action.payload;
      })
      .addCase(fetchColors.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
  }
});

export default colorsSlice.reducer;

