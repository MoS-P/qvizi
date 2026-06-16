import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; 
import authReducer from './authSlice';
import counterReducer from './counterSlice'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    counter: counterReducer,
  },
});