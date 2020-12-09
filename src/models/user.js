import ApplicationModel from './application-model'


class User extends ApplicationModel{
    constructor(params = {}) {
      super(params)
      this.className = 'User'
    }
    static validationRules() {
      const phoneNumberRegex = /(9)[0-9]{9}/
      return {
        name: [{ required: true, message: 'Name required', trigger: 'blur' }],
        email: [{ required: true, message: 'Email required', trigger: 'blur' }],
        address: [{ required: true, message: 'Address required', trigger: 'blur' }],
        gender: [{ required: true, message: 'Gender required', trigger: 'blur' }],
        phoneNo: [
          { required: true, message: 'Phone Number required', trigger: 'blur' },
          {
            validator(_rule, value) {
              if (!phoneNumberRegex.test(value)) {
                return new Error('Invalid phone number')
              }
              return true
            }
          }
        ]
      }
    }
    static resourceName() {
        return 'User'
    }
}

export default User