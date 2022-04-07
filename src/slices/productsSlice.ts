import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppDispatch } from "../app/store"
import API from "../utils/apiClient";

export type ProductsState = {
  loading: boolean;
  hasError: boolean;
  errorMessage: string;
  products: any[];
  product: any | undefined;
}

export const initialState: ProductsState = {
  loading: false,
  hasError: false,
  errorMessage: "",
  product: undefined,
  products: []
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<{errMessage: string}>) => {
      state.loading = false;
      state.errorMessage = action.payload.errMessage;
      state.hasError = true;
    },
    setProduct: (state, action: PayloadAction<{product: any}>) => {
      state.product = action.payload.product;
    },
    setProducts: (state, action: PayloadAction<{products: any[]}>) => {
      state.products = action.payload.products;
    },
  }
})

const {
  startLoading,
  setError,
  setProduct,
  setProducts
} = productsSlice.actions

export const productsSelector = (state: RootState) => state.products;

const productsReducer = productsSlice.reducer;
export default productsReducer;

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading())
    const response = await API.get('/products')
    dispatch(setProducts({ products: response.data }))
  } catch (error) {
    dispatch(setError({ errMessage: 'Server Error!!!' }))
  }
}

export const fetchProductById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading())
    const response = await API.get(`/products/${id}`)
    dispatch(setProduct({ product: response.data }))
  } catch (error) {
    dispatch(setError({ errMessage: 'Server Error!!!' }))
  }
}