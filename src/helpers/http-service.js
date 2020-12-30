import axios from 'axios'
import { BASE_URL } from '@/helpers/api-url'

const v1HTTPService = axios.create({
  headers: {
    common: {        // can be common or any other method
      APPTYPE: 'vue'
    }
  },
  baseURL: BASE_URL,
});

export { v1HTTPService }
