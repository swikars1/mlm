const payments = state => state.payments

const paymentsMeta = state => state.meta

const payment = state => state.payment

const paymentsLoading = state => state.paymentsLoading

const paymentLoading = state => state.paymentLoading

const paymentSaveLoading = state => state.paymentSaveLoading

export default {
  payment,
  payments,
  paymentsLoading,
  paymentLoading,
  paymentSaveLoading,
  paymentsMeta
}
