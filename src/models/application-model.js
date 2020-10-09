import camelToSnake from '@/helpers/camel-to-snake'
import { INDEX_PATH, CREATE_PATH, SHOW_PATH, UPDATE_PATH, DESTROY_PATH } from '@/helpers/api-url'
import { v1HTTPService } from '@/helpers/http-service'
import plural from '@/helpers/resource-name-pluralizer'

class ApplicationModel {
  constructor(modelAttrs) {
    const attrs = modelAttrs || {}
    this.className = this.constructor.name.toString()
    for (let key in attrs) {
      if (attrs[key] != null) {
        this[_.camelCase(key)] = attrs[key]
      }
    }
  }
  static index(params = {}) {
    const serializedParams = camelToSnake(params)
    const resourceName = _.snakeCase(plural(this.resourceName()))
    return v1HTTPService({ ...INDEX_PATH({ resourceName, params }) })
  }
  static show(params = {}) {
    const serializedParams = camelToSnake(params)
    const resourceName = _.snakeCase(plural(this.resourceName()))
    return v1HTTPService({ ...SHOW_PATH({ resourceName, params }) })
  }
  create() {
    const { className } = this
    const serializedData = camelToSnake(this)
    const data = className ? { [_.snakeCase(className)]: serializedData } : serializedData
    const resourceName = _.snakeCase(plural(className))
    return v1HTTPService({ ...CREATE_PATH({ resourceName }), data })
  }
  update() {
    const { className } = this
    const serializedData = camelToSnake(this)
    const data = className ? { [_.snakeCase(className)]: serializedData } : serializedData
    const resourceName = _.snakeCase(plural(className))
    return v1HTTPService({ ...UPDATE_PATH({ resourceName, id: serializedData.id }), data })
  }
  destroy() {
    const { className } = this
    const serializedData = camelToSnake(this)
    const resourceName = _.snakeCase(plural(className))
    return v1HTTPService({ ...DESTROY_PATH({ resourceName, id: serializedData.id }), serializedData })
  }
}

export default ApplicationModel