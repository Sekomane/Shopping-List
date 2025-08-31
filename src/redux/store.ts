import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import shoppingReducer from './slices/shoppingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shopping: shoppingReducer,
  },
});

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
