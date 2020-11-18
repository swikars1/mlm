const mutations = {
  AUTH_REQUEST: (state) => {
    state.status = 'loading'
  },
  AUTH_SUCCESS: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  AUTH_ERROR: (state) => {
    state.status = 'error'
  },
}

export default {
  ...mutations
}