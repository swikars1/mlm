import ApplicationModel from './application-model'


class Product extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Product'
    }
    static resourceName() {
        return 'Product'
    }
}

export default Product