const BASE_URL = 'https://mlm-pyramid.herokuapp.com'

const API_URL_PREFIX = '/api'

const INDEX_PATH = ({ resourceName, params }) => ({
  url: `${API_URL_PREFIX}/${resourceName}`,
  method: 'GET',
  params
})

const CREATE_PATH = ({ resourceName }) => ({
  url: `${API_URL_PREFIX}/${resourceName}`,
  method: 'POST'
})


export {
  BASE_URL,
  INDEX_PATH,
  CREATE_PATH,
}