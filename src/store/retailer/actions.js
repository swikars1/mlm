import apiDispatcher from '@/helpers/api-dispatcher'
import Retailer from '@/models/retailer'

const getRetailers = (context, params) =>
  apiDispatcher(context, {
    resource: Retailer,
    storeKey: 'retailers',
    loadingKey: 'retailersLoading',
    action: 'index',
    metaKey: 'meta',
    params
  })

const createRetailer = (context, { retailer: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'retailers',
    loadingKey: 'retailerSaveLoading',
    action: 'create'
  })

const updateRetailer = (context, { retailer: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'retailers',
    loadingKey: 'retailerSaveLoading',
    action: 'update'
  })

const destroyRetailer = (context, { retailer: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'retailers',
    loadingKey: 'retailersLoading',
    action: 'destroy'
  })

const getRetailer = (context, params) =>
  apiDispatcher(context, {
    resource: Retailer,
    storeKey: 'retailer',
    loadingKey: 'retailerLoading',
    action: 'show',
    params
  })

const uploadImage = (context, params) => 
  apiDispatcher(context, {
    resource: new Retailer(params),
    storeKey: 'retailers',
    loadingKey: 'retailerSaveLoading',
    action: 'uploadImage',
    commitType: 'update'
  })

export default {
  getRetailers,
  createRetailer,
  updateRetailer,
  getRetailer,
  destroyRetailer,
  uploadImage
}
