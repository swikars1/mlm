import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  payments: [],
  paymentsLoading: false,
  paymentSaveLoading: false,
  payment: {},
  meta: {},
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
