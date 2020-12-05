import ApplicationModel from './application-model'


class Payment extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Payment'
    }
    static validationRules() {
      const phoneNumberRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
      return {
        title: [{ required: true, message: 'Payment title required', trigger: 'blur' }],
      }
    }
    static resourceName() {
        return 'Payment'
    }
}

export default Payment
