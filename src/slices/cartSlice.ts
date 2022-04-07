import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
export type CartState = {
  countItems: number;
  items: any[];
}

export const initialState: CartState = {
  countItems: 0,
  items: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<{count: number, product: any}>) => {
      const { items, countItems } = state;
      items.push({
        count: action.payload.count,
        product: action.payload.product
      })
      state.countItems = countItems + action.payload.count;
      state.items = items;
    }
  }
})

export const {
  addItemToCart
} = cartSlice.actions

export const cartSelector = (state: RootState) => state.cart;

const cartReducer = cartSlice.reducer;
export default cartReducer;
