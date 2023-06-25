import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from 'services/redux/slices/userSlice'
import { USER_LOGIN } from 'utils/constant'
import storage from 'utils/storage'

export default function useExpiredToken() {
  const [isExpired, setIsExpired] = useState(false)
  const dispatch = useDispatch()
  const checkToken = () => {
    const token = storage.get(USER_LOGIN)?.accessToken
    if (token) {
      const decodedToken = jwtDecode(token)
      const currentDate = new Date()
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const action = userAction.reset()
        dispatch(action)
        return true
      }
    }
    return false
  }
  useEffect(() => {
    const tokenExpired = checkToken()
    setIsExpired(tokenExpired)
  }, [])
  return isExpired
}
