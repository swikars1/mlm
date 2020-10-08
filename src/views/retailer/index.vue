<template>
    <div class="table-index-page">
        <header>
          <h1>Retailers</h1>
        </header>
         <BaseTable
          :columns="columns"
          :data="retailers"
          :loading="retailersLoading"
          :deletable="false"
        >
          
        </BaseTable>
        <BaseDrawer
          v-model="paymentDrawer"
          title="Add Purchase"
        >
          <PaymentForm
            v-if="paymentDrawer"
            :close-drawer="handlePayment"
          />
        </BaseDrawer>
        <BaseDrawer
          v-model="showDrawer"
          title="Create Retailer"
        >
          <RetailerNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <BaseButton class="m-l-1" @click="handleCreate">
          Create Retailer
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { RETAILER_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip } from 'view-design'
import RetailerNew from './new'
import PaymentForm from './payment-form'

const RETAILER_STORE_KEY = 'retailerStore'

export default {
  components: {
    Icon,
    Tooltip,
    RetailerNew,
    PaymentForm
  },
  data() {
    return {
      columns: RETAILER_COLUMNS,
      showDrawer: false,
      paymentDrawer: false
    }
  },
  mounted() {
    this.$store.dispatch(`${RETAILER_STORE_KEY}/getRetailers`)
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
      retailers: `${RETAILER_STORE_KEY}/retailers`,
      retailersLoading: `${RETAILER_STORE_KEY}/retailersLoading`
    })
  }
}
</script>
<style lang="sass">

</style>