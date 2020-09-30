import camelToSnake from '@/helpers/camel-to-snake'
import { INDEX_PATH } from '@/helpers/api-url'
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
}

export default ApplicationModel