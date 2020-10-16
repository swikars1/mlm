<template>
  <ProductForm :close-drawer="closeDrawer" />
</template>

<script>
import ProductForm from './form'
export default {
  components: {
    ProductForm
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true
    }
  }
}
</script>