import { modals } from '@mantine/modals'
import { createSlice } from '@reduxjs/toolkit'
import modalMessage from 'components/HOC/modalMessage'
import openLogin from 'components/base/FormLogin/openLogin'
import userThunk from '../thunk/userThunk'

const initialState = {
  userLogin: {},
  userProfile: {},
  isLoading: false,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.userLogin = action.payload
    },
    userProfile: (state, action) => {
      state.userProfile = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userThunk.signin.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(userThunk.signin.fulfilled, (state, action) => {
      state.userLogin = action.payload
      state.isLoading = false
      modals.closeAll()
    })
    builder.addCase(userThunk.signin.rejected, (state, action) => {
      state.isLoading = false
      modals.closeAll()
      modalMessage({
        btnTitle: 'OK',
        handle: openLogin,
        title: action.error.message,
      })
    })
    builder.addCase(userThunk.getProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload
    })
  },
})

export const { userLogin, userProfile } = userSlice.actions

export default userSlice.reducer
