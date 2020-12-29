import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'
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
import HomeIndex from '@/views/home/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: LoginIndex,
    meta: {
      requiresAuth: false
    }
  },

  // {
  //   path: '',
  //   component: HomeIndex,
  //   meta: {
  //     requiresAuth: false
  //   }
  // },

  {
    path: '/dashboard',
    component: AppLayout,
    children: [
      {
        path: '',
        component: DashboardIndex
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/customers',
    component: AppLayout,
    children: [
      {
        path: '',
        component: CustomerIndex
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/retailers',
    component: AppLayout,
    children: [
      {
        path: '',
        component: RetailerIndex
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/retailer-type',
    component: AppLayout,
    children: [
      {
        path: '',
        component: RetailerTypeIndex
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/category',
    component: AppLayout,
    children: [
      {
        path: '',
        component: CategoryIndex
      }
    ],
    meta: {
      requiresAuth: true
    }
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
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    component: AppLayout,
    children: [
      {
        path: '',
        component: UserIndex
      }
    ],
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  window.previousUrl = from.path
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['authStore/isAuthenticated']) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
