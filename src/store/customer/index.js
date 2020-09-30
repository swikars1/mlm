import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  customers: [],
  customersLoading: false,
  customerSaveLoading: false,
  customer: {},
  meta: {},
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
