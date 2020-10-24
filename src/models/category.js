import ApplicationModel from './application-model'


class Category extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Category'
    }
    static resourceName() {
        return 'Category'
    }
}

export default Category