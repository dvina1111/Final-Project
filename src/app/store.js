import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
