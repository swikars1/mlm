import ApplicationModel from './application-model'
import { DASHBOARD_WIDGET_URL, GENDER_PIE_URL, LINE_CHART_URL } from '@/helpers/api-url'
import { v1HTTPService } from '@/helpers/http-service'
import plural from '@/helpers/resource-name-pluralizer'
import camelToSnake from '@/helpers/camel-to-snake'

class Dashboard extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Dashboard'
    }
    static resourceName() {
        return 'Dashboard'
    }

    static getWidgets(params={}) {
      return v1HTTPService({ ...DASHBOARD_WIDGET_URL() })
    }
    static getGenderPieChart(params={}) {
      return v1HTTPService({ ...GENDER_PIE_URL() })
    }
    static getLineChart(params={}) {
      return v1HTTPService({ ...LINE_CHART_URL() })
    }
}

export default Dashboard