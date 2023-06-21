import shoesAPI from 'services/axios/configAxios'
import { TOKEN } from 'utils/constant'
import storage from 'utils/storage'

const URL = {
  userSignUp: 'Users/signup',
  userSignIn: 'Users/signin',
  userGetProfile: 'Users/getProfile',
}

const userAPI = {
  signup: async (data) => {
    const result = await shoesAPI.post(URL.userSignUp, data)
    return result
  },
  signin: async (data) => {
    const result = await shoesAPI.post(URL.userSignIn, data)
    storage.save(TOKEN, result.data.content.accessToken)
    return result.data.content
  },
  getProfile: async () => {
    const result = await shoesAPI.post(URL.userGetProfile)
    return result.data.content
  },
}

export default userAPI
