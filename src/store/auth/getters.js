const isAuthenticated = state => !!state.token

const authStatus = state => state.status

export default {
  isAuthenticated,
  authStatus
}