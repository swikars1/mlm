import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import _ from 'lodash'
import '@/assets/stylesheets/app.sass'
import '@/components/_globaling'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype._ = _

const token = localStorage.getItem('user-token')

if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
