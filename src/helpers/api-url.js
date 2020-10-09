// const BASE_URL = 'https://mlm-pyramid.herokuapp.com'
const BASE_URL = 'http://localhost:3000'

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

const SHOW_PATH = ({ resourceName, params }) => ({
  url: `${API_URL_PREFIX}/${resourceName}/${params.id}`,
  method: 'GET',
  params
})

const UPDATE_PATH = ({ resourceName, id }) => ({
  url: `${API_URL_PREFIX}/${resourceName}/${id}`,
  method: 'PUT'
})

const DESTROY_PATH = ({ resourceName, id }) => ({
  url: `${API_URL_PREFIX}/${resourceName}/${id}`,
  method: 'DELETE'
})


export {
  BASE_URL,
  INDEX_PATH,
  CREATE_PATH,
  SHOW_PATH,
  UPDATE_PATH,
  DESTROY_PATH
}