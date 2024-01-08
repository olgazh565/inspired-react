import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {GOODS_URL} from '../const';

export const fetchGender = createAsyncThunk(
  'goods/fetchGender',
  async (gender) => {
    const url = new URL(GOODS_URL);
    url.searchParams.append('gender', gender);
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
);

export const fetchCategory = createAsyncThunk(
  'goods/fetchCategory',
  async (params) => {
    const url = new URL(GOODS_URL);

    for (const key in params) {
      url.searchParams.append(key, params[key]);
    }

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
);

export const fetchAll = createAsyncThunk(
  'goods/fetchAll',
  async (params) => {
    const url = new URL(GOODS_URL);

    for (const key in params) {
      url.searchParams.append(key, params[key]);
    }

    url.searchParams.append('count', 'all');

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
);

const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    status: '',
    goodsList: [],
    error: null,
    page: 1,
    pages: 1,
    totalCount: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGender.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.pages = 1;
        state.goodsList = [];
      })
      .addCase(fetchGender.fulfilled, (state, action) => {
        state.status = 'success';
        state.goodsList = action.payload;
        state.totalCount = null;
      })
      .addCase(fetchGender.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
        state.totalCount = null;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.goodsList = [];
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = 'success';
        state.goodsList = action.payload.goods;
        state.pages = action.payload.pages;
        state.totalCount = action.payload.totalCount;    
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
        state.goodsList = [];
      })
      .addCase(fetchAll.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.pages = 1;
        state.goodsList = [];
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = 'success';
        state.goodsList = action.payload;
        state.totalCount = null;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
        state.goodsList = [];
      })
  }
});

export default goodsSlice.reducer;
export const {setPage} = goodsSlice.actions;