import apiDispatcher from '@/helpers/api-dispatcher'
import Customer from '@/models/customer'

const getCustomers = (context, params) =>
  apiDispatcher(context, {
    resource: Customer,
    storeKey: 'customers',
    loadingKey: 'customersLoading',
    action: 'index',
    metaKey: 'meta',
    params
  })

const createCustomer = (context, { customer: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'customers',
    loadingKey: 'customerSaveLoading',
    action: 'create'
  })

const updateCustomer = (context, { customer: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'customers',
    loadingKey: 'customerSaveLoading',
    action: 'update'
  })

const destroyCustomer = (context, { customer: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'customers',
    loadingKey: 'customersLoading',
    action: 'destroy'
  })

const getCustomer = (context, params) =>
  apiDispatcher(context, {
    resource: Customer,
    storeKey: 'customer',
    loadingKey: 'customerLoading',
    action: 'show',
    params
  })

const addPayment = (context, { customer: resource }) => 
  apiDispatcher(context, {
    resource,
    storeKey: 'customer',
    loadingKey: 'customerSaveLoading',
    action: 'addPayment'
  })

const uploadDocument = (context, params) => 
  apiDispatcher(context, {
    resource: new Customer(params),
    storeKey: 'customers',
    loadingKey: 'customerSaveLoading',
    action: 'uploadDocument',
    commitType: 'update'
  })

export default {
  getCustomers,
  createCustomer,
  updateCustomer,
  getCustomer,
  destroyCustomer,
  addPayment,
  uploadDocument
}
