import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './slices/modalSlice'

const store = configureStore({
  reducer: {
    modalSlice,
  },
})

export default store
