import ApplicationModel from './application-model'


class Payment extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Payment'
    }
    static validationRules() {
      return {
        name: [{ required: true, message: 'Payment title required', trigger: 'blur' }],
      }
    }
    static customerPaymentRules() {
      return {
        name: [{ required: true, message: 'Payment title required', trigger: 'blur' }],
        billNo: [{ required: true, message: 'Bill Number required', trigger: 'blur' }],
        expenditure: [{ required: true, message: 'Expenditure required', trigger: 'blur' }],
      }
    }    
    static resourceName() {
        return 'Payment'
    }
}

export default Payment
