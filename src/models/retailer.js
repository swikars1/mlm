import ApplicationModel from './application-model'


class Retailer extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Retailer'
    }
    static resourceName() {
        return 'Retailer'
    }
}

export default Retailer