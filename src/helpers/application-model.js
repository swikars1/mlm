import camelToSnake from './camel-to-snake'

class ApplicationModel {
  constructer(modelAttrs) {
    const attrs = modelAttrs || {}
    this.className = this.constructor.name.toString()
    this = camelToSnake(this)
  }
}

export default ApplicationModel