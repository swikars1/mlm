import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomerIndex from '@/views/customer/index'

Vue.use(VueRouter)

const routes = [ 
  {
  path: '/customers',
  component: CustomerIndex
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
