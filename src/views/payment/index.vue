<template>
    <div class="table-index-page">
        <header>
          <h1>Payments <span v-if="isFiltered">of {{ $route.query.name }}</span></h1>
          <Form>
            <BaseSearch
              placeholder="Search Payment"
              resource="payment"
            />
          </Form>
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
        <Pagination
          resource="payment"
        />
        <BaseButton class="m-l-1" @click="handleCreate">
          Create Payment
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { PAYMENT_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip, Form } from 'view-design'
import PaymentNew from './new'
import PaymentShow from './show'
import Pagination, { PaginationMixin } from '@/components/pagination'



const PAYMENT_STORE_KEY = 'paymentStore'

export default {
  mixins: [PaginationMixin],
  components: {
    Icon,
    Tooltip,
    PaymentNew,
    PaymentShow,
    Pagination,
    Form
  },
  data() {
    return {
      columns: PAYMENT_COLUMNS,
      showDrawer: false,
      paymentDrawer: false
    }
  },
  async mounted() {
    this.handleImmigrantQuery(this.$route.query)
    if (!this.isFiltered)
      this.$store.dispatch(`${PAYMENT_STORE_KEY}/getPayments`)
  },
  methods: {
    handleImmigrantQuery(query) {
      this.$store.dispatch(`${PAYMENT_STORE_KEY}/getPayments`, query)
    },
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
    }),
    isFiltered() {
      return !_.isEmpty(this.$route.query)
    },
  }
}
</script>
<style lang="sass">

</style>