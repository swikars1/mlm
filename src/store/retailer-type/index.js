import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  retailerTypes: [],
  retailerTypesLoading: false,
  retailerTypeSaveLoading: false,
  retailerType: {},
  meta: {},
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
