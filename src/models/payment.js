import ApplicationModel from './application-model'


class Payment extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Payment'
    }
    static resourceName() {
        return 'Payment'
    }
}

export default Payment
