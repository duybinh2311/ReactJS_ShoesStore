import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: false,
  register: false,
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openLogin: (state, action) => {
      state.login = action.payload
    },
    openRegister: (state, action) => {
      state.register = action.payload
    },
  },
})

export const { openLogin, openRegister } = modalSlice.actions

export default modalSlice.reducer
