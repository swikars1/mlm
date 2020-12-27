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
    static validationRules() {
      const phoneNumberRegex = /(9)[0-9]{9}/
      return {
        name: [{ required: true, message: 'Name required', trigger: 'blur' }],
        email: [{ required: true, message: 'Email required', trigger: 'blur' }],
        gender: [
          { required: true, message: 'Gender required', trigger: 'blur' },
          {
            validator(_rule, value) {
              if (value) {
                return true
              }
            }
          }
        ],
        phoneNo: [
          { required: true, message: 'Phone Number required', trigger: 'blur' },
          {
            validator(_rule, value) {
              if (!phoneNumberRegex.test(value)) {
                return new Error('Invalid phone number')
              }
              return true
            }
          }
        ],
        password: [
          {
            required: true,
            message: 'Password required',
            trigger: 'blur'
          }
        ],
      }
    }
    static resourceName() {
        return 'Customer'
    }
    addPayment() {
  	  const { className } = this
      const serializedData = camelToSnake(this)
      const data = className ? { [_.snakeCase(className)]: serializedData } : serializedData
      const resourceName = _.snakeCase(plural(className))
      return v1HTTPService({ ...CUSTOMER_PAYMENT_PATH({ resourceName, id: serializedData.id }), data })
    }
}



export default Customer