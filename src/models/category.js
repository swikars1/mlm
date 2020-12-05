import ApplicationModel from './application-model'


class Category extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'Category'
    }
    static validationRules() {
      return {
        name: [{ required: true, message: 'Name required', trigger: 'blur' }],
      }
    }
    static resourceName() {
        return 'Category'
    }
}

export default Category