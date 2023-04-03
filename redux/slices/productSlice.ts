import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { AppState } from '../store'

export interface CounterState {
  product: []
}

const initialState: CounterState = {
  product: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
        state.product = [action.payload]
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.product,
      };
    },
  },
})

export const {  } = productSlice.actions

export const selectCount = (state: AppState) => state.rootReducer.productSlice.product



export default productSlice.reducer