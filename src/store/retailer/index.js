import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  retailers: [],
  retailersLoading: false,
  retailerSaveLoading: false,
  retailer: {},
  meta: {},
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
