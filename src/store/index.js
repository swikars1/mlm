import Vuex from 'vuex'
import Vue from 'vue'

import customerStore from './customer'
import productStore from './product'
import retailerStore from './retailer'
import paymentStore from './payment'
import retailerTypeStore from './retailer-type'
import userStore from './user'





Vue.use(Vuex)

const modules = {
  customerStore,
  productStore,
  retailerStore,
  paymentStore,
  retailerTypeStore,
  userStore,

};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
})

export default store
