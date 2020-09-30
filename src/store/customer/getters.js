const customers = state => state.customers

const customersMeta = state => state.meta

const customer = state => state.customer

const customersLoading = state => state.customersLoading

const customerLoading = state => state.customerLoading

const customerSaveLoading = state => state.customerSaveLoading

export default {
  customer,
  customers,
  customersLoading,
  customerLoading,
  customerSaveLoading,
  customersMeta
}
