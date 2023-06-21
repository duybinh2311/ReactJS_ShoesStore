import axios from 'axios'

const SHOES_API_URL = 'https://shop.cyberlearn.vn/api/'

const shoesAPI = axios.create({
  baseURL: SHOES_API_URL,
  timeout: 30000,
})

export default shoesAPI
