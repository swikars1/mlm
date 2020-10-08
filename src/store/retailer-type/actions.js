import apiDispatcher from '@/helpers/api-dispatcher'
import RetailerType from '@/models/retailer-type'

const getRetailerTypes = (context, params) =>
  apiDispatcher(context, {
    resource: RetailerType,
    storeKey: 'retailerTypes',
    loadingKey: 'retailerTypesLoading',
    action: 'index',
    metaKey: 'meta',
    params
  })

const createRetailerType = (context, { retailerType: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'retailerTypes',
    loadingKey: 'retailerTypeSaveLoading',
    action: 'create'
  })

const updateRetailerType = (context, { retailerType: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'retailerTypes',
    loadingKey: 'retailerTypeSaveLoading',
    action: 'update'
  })

const destroyRetailerType = (context, { retailerType: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'retailerTypes',
    loadingKey: 'retailerTypesLoading',
    action: 'destroy'
  })

const getRetailerType = (context, params) =>
  apiDispatcher(context, {
    resource: RetailerType,
    storeKey: 'retailerType',
    loadingKey: 'retailerTypeLoading',
    action: 'show',
    params
  })

export default {
  getRetailerTypes,
  createRetailerType,
  updateRetailerType,
  getRetailerType,
  destroyRetailerType
}
