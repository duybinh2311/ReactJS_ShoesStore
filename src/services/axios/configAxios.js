import axios from 'axios'
import { TOKEN } from 'utils/constant'
import storage from 'utils/storage'

const SHOES_API_URL = 'https://shop.cyberlearn.vn/api/'

const shoesAPI = axios.create({
  baseURL: SHOES_API_URL,
  timeout: 30000,
})

shoesAPI.interceptors.request.use((config) => {
  if (storage.get(TOKEN)) {
    const token = storage.get(TOKEN)
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

shoesAPI.interceptors.response.use(
  async (response) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return response
  },
  async (error) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    throw error.response?.data
  }
)

export default shoesAPI
