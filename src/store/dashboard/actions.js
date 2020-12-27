import apiDispatcher from '@/helpers/api-dispatcher'
import Dashboard from '@/models/dashboard'

const getWidgets = (context, params) =>
  apiDispatcher(context, {
    resource: Dashboard,
    storeKey: 'widgets',
    loadingKey: 'widgetsLoading',
    action: 'getWidgets',
    commitType: 'show',
    metaKey: 'meta',
    params
  })

const getGenderPieChart = (context, params) =>
  apiDispatcher(context, {
    resource: Dashboard,
    storeKey: 'genderPieChart',
    loadingKey: 'genderPieChartLoading',
    action: 'getGenderPieChart',
    commitType: 'index',
    metaKey: 'meta',
    params
  })  

export default {
  getWidgets,
  getGenderPieChart
}
