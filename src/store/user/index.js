import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  users: [],
  usersLoading: false,
  userSaveLoading: false,
  user: {},
  meta: {},
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
