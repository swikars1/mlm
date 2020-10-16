<template>
  <ProductForm
    :close-drawer="closeDrawer"
    :resource="resource"  
  />
</template>
<script>
import ProductForm from './form'
import { mapGetters } from 'vuex'

const STORE_KEY = 'productStore'

export default {
  data() {
    return {
      resource: {}
    }
  },
  components: {
    ProductForm
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    closeDrawer: {
      type: Function,
      required: true,
    }
  },
  mounted() {
    this.$store.dispatch(`${STORE_KEY}/getProduct`, { id: this.id })
  },
  computed: {
    ...mapGetters({
      product: `${STORE_KEY}/product`,
    })
  },
  watch: {
    product(newVal) {
      this.resource = _.cloneDeep(newVal)
    }
  }
}
</script>
