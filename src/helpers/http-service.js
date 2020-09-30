import axios from 'axios'
const basicHeaderObj = JSON.parse(localStorage.headers || '{}')

import { BASE_URL } from '@/helpers/RoutePath'

const v1HTTPService = config => {
  return sendRequest({ config, apiVersion: 'v1' })
}

const sendRequest = ({ config, apiVersion }) => {
  let serializerParams = config && config.params && config.params.headers
  let headers = {
    ...basicHeaderObj,
    ...serializerParams,
    Accept: `application/api.${apiVersion}`,
    platform: 'vue'
  }
  return axios.create({
    baseURL: BASE_URL,
    ...config,
    headers
  })
}

const v2HTTPService = config => {
  return sendRequest({ config, apiVersion: 'v2' })
}

export { v1HTTPService, v2HTTPService }
