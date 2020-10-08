import ApplicationModel from './application-model'


class RetailerType extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'RetailerType'
    }
    static resourceName() {
        return 'RetailerType'
    }
}

export default RetailerType