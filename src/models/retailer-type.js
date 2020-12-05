import ApplicationModel from './application-model'


class RetailerType extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'RetailerType'
    }
    static validationRules() {
      return {
        name: [{ required: true, message: 'Name required', trigger: 'blur' }],
    }
        
    }
    static resourceName() {
        return 'RetailerType'
    }
}

export default RetailerType