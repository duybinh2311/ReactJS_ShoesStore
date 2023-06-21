import shoesAPI from 'services/axios/configAxios'

const URL = {
  userSignUp: 'Users/signup',
  userSignIn: 'Users/signin',
  userGetProfile: 'Users/getProfile',
}

const USER_API = {
  signup: async (data) => {
    try {
      const result = await shoesAPI.post(URL.userSignUp, data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      return result.data
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      return Promise.reject(error.response.data)
    }
  },
  signin: async (data) => {
    try {
      const result = await shoesAPI.post(URL.userSignIn, data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (error) {}
  },
}

export default USER_API
