import jwtDecode from 'jwt-decode'
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from 'services/redux/slices/userSlice'

export default function useCheckToken() {
  /* App State */
  const { userLogin } = useSelector((state) => state.user)
  /* Hook Init */
  const dispatch = useDispatch()
  /* Logic */
  const checkToken = () => {
    const token = userLogin.accessToken
    if (token) {
      const decodedToken = jwtDecode(token)
      const currentDate = new Date()
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const action = userAction.reset()
        dispatch(action)
        toast.error('Login session expired')
      }
    }
  }
  return useEffect(() => {
    checkToken()
  })
}
