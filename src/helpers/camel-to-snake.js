/* eslint-disable */

const camelToSnake = obj => {
  if (typeof obj != 'object') return obj
  for (let oldName in obj) {
    let newName = oldName.replace(/([A-Z])/g, $1 => '_' + $1.toLowerCase())
    if (newName != oldName) {
      if (obj.hasOwnProperty(oldName)) {
        obj[newName] = obj[oldName]
        delete obj[oldName]
      }
    }
    if (typeof obj[newName] == 'object') {
      obj[newName] = camelToSnake(obj[newName])
    }
  }
  return obj
}

export default camelToSnake
