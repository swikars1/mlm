<template>
    <div class="table-index-page">
        <header>
          <h1>Payments</h1>
        </header>
         <BaseTable
          :columns="columns"
          :data="payments"
          :loading="paymentsLoading"
          :deletable="true"
        >
          
        </BaseTable>
        <BaseDrawer
          v-model="showDrawer"
          title="Create Payment"
        >
          <PaymentNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <BaseButton class="m-l-1" @click="handleCreate">
          Create Payment
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { PAYMENT_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip } from 'view-design'
import PaymentNew from './new'
import PaymentShow from './show'


const PAYMENT_STORE_KEY = 'paymentStore'

export default {
  components: {
    Icon,
    Tooltip,
    PaymentNew,
    PaymentShow
  },
  data() {
    return {
      columns: PAYMENT_COLUMNS,
      showDrawer: false,
      paymentDrawer: false
    }
  },
  mounted() {
    this.$store.dispatch(`${PAYMENT_STORE_KEY}/getPayments`)
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
      payments: `${PAYMENT_STORE_KEY}/payments`,
      paymentsLoading: `${PAYMENT_STORE_KEY}/paymentsLoading`
    })
  }
}
</script>
<style lang="sass">

</style>