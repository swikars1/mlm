class ApplicationModel {
  constructor(modelAttrs) {
    const attrs = modelAttrs || {}
    this.className = this.constructor.name.toString()
    }