const API_URL_PREFIX = '/api'

const CREATE_PATH = ({ resourceName }) => ({
  url: `${API_URL_PREFIX}/${resourceName}`,
  method: 'POST'
})

export {
  CREATE_PATH
}