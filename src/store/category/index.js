import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  categories: [],
  categoriesLoading: false,
  categorySaveLoading: false,
  category: {},
  meta: {},
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
