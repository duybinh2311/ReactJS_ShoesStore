import { createAsyncThunk } from '@reduxjs/toolkit'
import userAPI from 'services/api/userAPI'

const userThunk = {
  signin: createAsyncThunk('userLogin', userAPI.signin),
  getProfile: createAsyncThunk('userProfile', userAPI.getProfile),
}

export default userThunk
