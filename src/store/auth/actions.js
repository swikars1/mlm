import axios from 'axios'
import { LOGIN_PATH } from '@/helpers/api-url'
import { v1HTTPService } from '@/helpers/http-service'
import BaseNotice from '@/components/_base-notice.vue'

const authRequest = ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      v1HTTPService({ ...LOGIN_PATH(), data: user })
        .then(resp => {
          const token = resp.headers['access-token']
          localStorage.setItem('user-token', token) 
          axios.defaults.headers.common['Authorization'] = token
          commit('AUTH_SUCCESS', token)
          resolve(resp)
        })
      .catch(err => {
        BaseNotice.render({ props: { desc: err.response.data.errors.join('\n'), type: 'error' } })
        commit('AUTH_ERROR', err)
        localStorage.removeItem('user-token')
        delete axios.defaults.headers.common['Authorization']
        reject(err)
      })
    })
  }

  const authLogout = ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('user-token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }

export default {
  authRequest,
  authLogout
}