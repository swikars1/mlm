import ApplicationModel from './application-model'


class Retailer extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Retailer'
    }

    static validationRules() {
      const phoneNumberRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
      return {
        name: [{ required: true, message: 'Name required', trigger: 'blur' }],
        address: [{ required: true, message: 'Address required', trigger: 'blur' }],
        panNumber: [{ required: true, message: 'Address required', trigger: 'blur' }],
        contactNumber: [
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
      }
    }

    static resourceName() {
        return 'Retailer'
    }
}

export default Retailer