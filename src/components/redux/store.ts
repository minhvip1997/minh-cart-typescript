import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './productSlice';

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch