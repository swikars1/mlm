import apiDispatcher from '@/helpers/api-dispatcher'
import Category from '@/models/category'

const getCategories = (context, params) =>
  apiDispatcher(context, {
    resource: Category,
    storeKey: 'categories',
    loadingKey: 'categoriesLoading',
    action: 'index',
    metaKey: 'meta',
    params
  })

const createCategory = (context, { category: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'categories',
    loadingKey: 'categorySaveLoading',
    action: 'create'
  })

const updateCategory = (context, { category: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'categories',
    loadingKey: 'categorySaveLoading',
    action: 'update'
  })

const destroyCategory = (context, { category: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'categories',
    loadingKey: 'categoriesLoading',
    action: 'destroy'
  })

const getCategory = (context, params) =>
  apiDispatcher(context, {
    resource: Category,
    storeKey: 'category',
    loadingKey: 'categoryLoading',
    action: 'show',
    params
  })

export default {
  getCategories,
  createCategory,
  updateCategory,
  getCategory,
  destroyCategory
}
