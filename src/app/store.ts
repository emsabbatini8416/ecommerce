import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../slices/productsSlice';
import cartReducer, { initialState }  from '../slices/cartSlice';
import { loadCart } from './browser-storage';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  },
  preloadedState: {
    cart: loadCart() || initialState
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
