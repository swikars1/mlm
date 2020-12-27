import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  widgets: {},
  widgetsLoading: false,
  genderPieChart: [],
  genderPieChartLoading: false
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
