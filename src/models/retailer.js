import ApplicationModel from './application-model'


class Retailer extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Retailer'
    }

    static validationRules() {
      const phoneNumberRegex = /(9)[0-9]{9}/
      return {
        name: [{ required: true, message: 'Name required', trigger: 'blur' }],
        address: [{ required: true, message: 'Address required', trigger: 'blur' }],
        panNumber: [{ required: true, message: 'Pan Number required', trigger: 'blur' }],
        percent: [{ required: true, message: 'Percent required', trigger: 'blur' }],
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
      }
    }

    static resourceName() {
        return 'Retailer'
    }
}

export default Retailer