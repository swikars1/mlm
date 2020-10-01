import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import _ from 'lodash'
import '@/assets/stylesheets/app.sass'
import '@/components/_globaling'

Vue.config.productionTip = false
Vue.prototype._ = _

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
