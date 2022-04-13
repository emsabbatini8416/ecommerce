import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppDispatch } from "../app/store"

const TAX_VALUE = 1.07;

export type CartState = {
  items: any[];
  countItems: number;
  tax: number;
  shipping: number;
  subTotal: number;
  total: number;
}

export const initialState: CartState = {
  items: [],
  countItems: 0,
  tax: 0,
  shipping: 9.99,
  subTotal: 0,
  total: 0
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
    }, 
    removeItemFromCart: (state, action: PayloadAction<{itemId: number}>) => {
      const { items } = state;
      const itemIndex = items.findIndex(i => i.itemId === action.payload.itemId)
      items.splice(itemIndex, 1);
      state.items = items;
    },
    calculate: (state) => {
      const { items } = state;
      const values = items.reduce((acc, curr) => {
        acc.count = acc.count + curr.count;
        acc.subTotal = acc.subTotal + (curr.count + curr.product.price)
        return acc
      }, {
        count: 0,
        subTotal: 0
      })
      state.countItems = values.count;
      state.subTotal = values.subTotal;
      state.tax = parseFloat(((values.subTotal + state.shipping) * TAX_VALUE).toFixed(2));
      state.total = values.subTotal + state.shipping + state.tax;
    },
    clear: (state) => {
      state = {...initialState}
    }
  }
})

export const {
  addItemToCart,
  removeItemFromCart,
  calculate,
  clear
} = cartSlice.actions

export const cartSelector = (state: RootState) => state.cart;

const cartReducer = cartSlice.reducer;
export default cartReducer;


export const addToCart = (payload: { count: number, product: any } ) => async (dispatch: AppDispatch) => {
  dispatch(addItemToCart(payload))
  dispatch(calculate())
}

export const removeFromCart = (payload: { itemId: number }) => async (dispatch: AppDispatch) => {
  dispatch(removeItemFromCart(payload))
  dispatch(calculate())
}
