<template>
    <div class="table-index-page">
        <header>
          <h1>Products</h1>
        </header>
         <BaseTable
          :columns="columns"
          :data="products"
          :loading="productsLoading"
          :deletable="true"
        >
          
        </BaseTable>
        <BaseDrawer
          v-model="showDrawer"
          title="Create Product"
        >
          <ProductNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <BaseButton class="m-l-1" @click="handleCreate">
          Create Product
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { PRODUCT_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip } from 'view-design'
import ProductNew from './new'

const PRODUCT_STORE_KEY = 'productStore'

export default {
  components: {
    Icon,
    Tooltip,
    ProductNew,
  },
  data() {
    return {
      columns: PRODUCT_COLUMNS,
      showDrawer: false,
      paymentDrawer: false
    }
  },
  mounted() {
    this.$store.dispatch(`${PRODUCT_STORE_KEY}/getProducts`)
  },
  methods: {
    handleCreate(){
      this.showDrawer = !this.showDrawer
    },
    handlePayment() {
      this.paymentDrawer = !this.paymentDrawer
    }
  },
  computed: {
    ...mapGetters({
      products: `${PRODUCT_STORE_KEY}/products`,
      productsLoading: `${PRODUCT_STORE_KEY}/productsLoading`
    })
  }
}
</script>
<style lang="sass">

</style>