import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productList: [],
}

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.productList = action.payload
    },
  },
})

export const productAction = productSlice.actions

export default productSlice.reducer
