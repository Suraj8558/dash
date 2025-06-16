import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import authSlice from './features/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth : authSlice,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;