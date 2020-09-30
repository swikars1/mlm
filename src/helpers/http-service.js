import axios from 'axios'
import { BASE_URL } from '@/helpers/api-url'

const v1HTTPService = axios.create({
  baseURL: BASE_URL
});

export { v1HTTPService }
