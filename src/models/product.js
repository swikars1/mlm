import ApplicationModel from './application-model'


class Product extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Product'
    }
    static validationRules() {
      const phoneNumberRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
      return {
        name: [{ required: true, message: 'Name required', trigger: 'blur' }],
        price: [{ required: true, message: 'Price required', trigger: 'blur' }],
        description: [{ required: true, message: 'Description required', trigger: 'blur' }],
        productCode: [{ required: true, message: 'Product Code required', trigger: 'blur' }],
	}
        
    }
    static resourceName() {
        return 'Product'
    }
}

export default Product