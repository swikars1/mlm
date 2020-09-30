import Vuex from 'vuex'
import Vue from 'vue'

import customerStore from './customer'

Vue.use(Vuex)

const modules = {
  customerStore
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
})

export default store
