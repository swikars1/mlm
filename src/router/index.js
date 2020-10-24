import Vue from 'vue'
import VueRouter from 'vue-router'

import AppLayout from '@/views/layout/app-layout'
import LoginIndex from '@/views/auth/login-index'
import CustomerIndex from '@/views/customer/index'
import RetailerIndex from '@/views/retailer/index'
import RetailerTypeIndex from '@/views/retailer-type/index'
import ProductIndex from '@/views/product/index'
import PaymentIndex from '@/views/payment/index'
import UserIndex from '@/views/user/index'
import DashboardIndex from '@/views/dashboard/index'
import CategoryIndex from '@/views/category/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LoginIndex,
    meta: {
      noAuth: true
    }
  },
  {
    path: '/dashboard',
    component: AppLayout,
    children: [
      {
        path: '',
        component: DashboardIndex
      }
    ]
  },
  {
    path: '/customers',
    component: AppLayout,
    children: [
      {
        path: '',
        component: CustomerIndex
      }
    ]
  },
  {
    path: '/retailers',
    component: AppLayout,
    children: [
      {
        path: '',
        component: RetailerIndex
      }
    ]
  },
  {
    path: '/retailer-type',
    component: AppLayout,
    children: [
      {
        path: '',
        component: RetailerTypeIndex
      }
    ]
  },
  {
    path: '/category',
    component: AppLayout,
    children: [
      {
        path: '',
        component: CategoryIndex
      }
    ]
  },
  {
    path: '/products',
    component: AppLayout,
    children: [
      {
        path: '',
        component: ProductIndex
      }
    ]
  },
  {
    path: '/payments',
    component: AppLayout,
    children: [
      {
        path: '',
        component: PaymentIndex
      }
    ]
  },
  {
    path: '/users',
    component: AppLayout,
    children: [
      {
        path: '',
        component: UserIndex
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
