const products = state => state.products

const productsMeta = state => state.meta

const product = state => state.product

const productsLoading = state => state.productsLoading

const productLoading = state => state.productLoading

const productSaveLoading = state => state.productSaveLoading

export default {
  product,
  products,
  productsLoading,
  productLoading,
  productSaveLoading,
  productsMeta
}
