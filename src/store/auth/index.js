import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  token: localStorage.getItem('user-token') || '',
  status: ''
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
