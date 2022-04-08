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
      const { items } = state;
      items.push({
        itemId: (new Date()).getTime(),
        count: action.payload.count,
        product: action.payload.product
      })
      state.items = items;
      state.countItems = items.reduce((acc, curr) => acc + curr.count, 0)
    }, 
    removeItemFromCart: (state, action: PayloadAction<{itemId: number}>) => {
      const { items } = state;
      const itemIndex = items.findIndex(i => i.itemId === action.payload.itemId)
      items.splice(itemIndex, 1);
      state.items = items;
      state.countItems = items.reduce((acc, curr) => acc + curr.count, 0)
    }
  }
})

export const {
  addItemToCart,
  removeItemFromCart
} = cartSlice.actions

export const cartSelector = (state: RootState) => state.cart;

const cartReducer = cartSlice.reducer;
export default cartReducer;
