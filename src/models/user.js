import ApplicationModel from './application-model'


class User extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'User'
    }
    static resourceName() {
        return 'User'
    }
}

export default User