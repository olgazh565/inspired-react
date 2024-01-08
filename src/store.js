import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {setServerStatus} from './features/serverStatusSlice';

const errorMiddleware = (store) => (next) => (action) => {
  if (action.type.endsWith('/rejected')) {
    store.dispatch(setServerStatus(false));
  } 

  if (action.type.endsWith('/fulfilled')) {
    store.dispatch(setServerStatus(true));
  } 

  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware),
});

export default store;
