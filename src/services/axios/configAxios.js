import axios from 'axios'
import { SHOES_API_URL } from 'utils/const'

const shoesAPI = axios.create({
  baseURL: SHOES_API_URL,
  timeout: 30000,
})
