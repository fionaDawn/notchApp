import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducerSlices/productReducer';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
