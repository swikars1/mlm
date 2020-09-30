import ApplicationModel from './application-model'


class Customer extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Customer'
    }
    static resourceName() {
        return 'Customer'
    }
}

export default Customer