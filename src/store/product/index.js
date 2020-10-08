import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  products: [],
  productsLoading: false,
  productSaveLoading: false,
  product: {},
  meta: {},
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
