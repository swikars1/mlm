import apiDispatcher from '@/helpers/api-dispatcher'
import Payment from '@/models/payment'

const getPayments = (context, params) =>
  apiDispatcher(context, {
    resource: Payment,
    storeKey: 'payments',
    loadingKey: 'paymentsLoading',
    action: 'index',
    metaKey: 'meta',
    params
  })

const createPayment = (context, { payment: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'payments',
    loadingKey: 'paymentSaveLoading',
    action: 'create'
  })

const updatePayment = (context, { payment: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'payments',
    loadingKey: 'paymentSaveLoading',
    action: 'update'
  })

const destroyPayment = (context, { payment: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'payments',
    loadingKey: 'paymentsLoading',
    action: 'destroy'
  })

const getPayment = (context, params) =>
  apiDispatcher(context, {
    resource: Payment,
    storeKey: 'payment',
    loadingKey: 'paymentLoading',
    action: 'show',
    params
  })

export default {
  getPayments,
  createPayment,
  updatePayment,
  getPayment,
  destroyPayment
}
