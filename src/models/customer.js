import ApplicationModel from './application-model'
import { CUSTOMER_PAYMENT_PATH } from '@/helpers/api-url'
import { v1HTTPService } from '@/helpers/http-service'
import plural from '@/helpers/resource-name-pluralizer'
import camelToSnake from '@/helpers/camel-to-snake'

class Customer extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Customer'
    }
    static resourceName() {
        return 'Customer'
    }
    addPayment() {
  	  const { className } = this
      const serializedData = camelToSnake(this)
      const data = className ? { [_.snakeCase(className)]: serializedData } : serializedData
      const resourceName = _.snakeCase(plural(className))
      debugger
      return v1HTTPService({ ...CUSTOMER_PAYMENT_PATH({ resourceName, id: serializedData.id }), data })
    }
}



export default Customer