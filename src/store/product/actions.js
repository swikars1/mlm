import apiDispatcher from '@/helpers/api-dispatcher'
import Product from '@/models/product'

const getProducts = (context, params) =>
  apiDispatcher(context, {
    resource: Product,
    storeKey: 'products',
    loadingKey: 'productsLoading',
    action: 'index',
    metaKey: 'meta',
    params
  })

const createProduct = (context, { product: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'products',
    loadingKey: 'productSaveLoading',
    action: 'create'
  })

const updateProduct = (context, { product: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'products',
    loadingKey: 'productSaveLoading',
    action: 'update'
  })

const destroyProduct = (context, { product: resource }) =>
  apiDispatcher(context, {
    resource,
    storeKey: 'products',
    loadingKey: 'productsLoading',
    action: 'destroy'
  })

const getProduct = (context, params) =>
  apiDispatcher(context, {
    resource: Product,
    storeKey: 'product',
    loadingKey: 'productLoading',
    action: 'show',
    params
  })

const uploadImage = (context, params) => 
  apiDispatcher(context, {
    resource: new Product(params),
    storeKey: 'products',
    loadingKey: 'productSaveLoading',
    action: 'uploadImage',
    commitType: 'update'
  })

export default {
  getProducts,
  createProduct,
  updateProduct,
  getProduct,
  destroyProduct,
  uploadImage
}
