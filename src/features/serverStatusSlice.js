import {createSlice} from '@reduxjs/toolkit';

const serverStatusSlice = createSlice({
  name: 'serverStatus',
  initialState: {
    status: true,
  },
  reducers: {
    setServerStatus(state, action) {
      state.status = action.payload;
    }
  }
});

export default serverStatusSlice.reducer;
export const {setServerStatus} = serverStatusSlice.actions;