<template>
    <div class="table-index-page">
        <header>
          <h1>Customers</h1>
        </header>
         <BaseTable
          :columns="columns"
          :data="customers"
          :loading="customersLoading"
          :deletable="false"
        > 
          <template #default="{ row }">
            <Tooltip
              placement="left-start"
              trigger="hover"
              content="Add Purchase"
            >
              <Icon
                class="pointer hover-green-text m-r-1" 
                type="md-add-circle"
                size="20"
                @click="handlePayment(row)"
              />
            </Tooltip>
          </template>
        </BaseTable>

        <BaseDrawer
          v-model="paymentDrawer"
          title="Add Purchase"
        >
          <PaymentForm
            v-if="paymentDrawer"
            :close-drawer="handlePayment"
            :id="id"
          />
        </BaseDrawer>
        <BaseDrawer
          v-model="showDrawer"
          title="Create Customer"
        >
          <CustomerNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <BaseButton class="m-l-1" @click="handleCreate">
          Create Customer
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { CUSTOMER_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip } from 'view-design'
import CustomerNew from './new'
import PaymentForm from './payment-form'
import Customer from '@/models'
import CustomerShow from './show.vue'

const CUSTOMER_STORE_KEY = 'customerStore'

export default {
  components: {
    Icon,
    Tooltip,
    CustomerNew,
    PaymentForm,
    CustomerShow
  },
  data() {
    return {
      columns: CUSTOMER_COLUMNS,
      showDrawer: false,
      paymentDrawer: false,
      id: null
    }
  },
  mounted() {
    this.$store.dispatch(`${CUSTOMER_STORE_KEY}/getCustomers`)
  },
  methods: {
    handleCreate(){
      this.showDrawer = !this.showDrawer
    },
    handlePayment(row) {
      this.id = row && row.id
      this.paymentDrawer = !this.paymentDrawer
    },
  },
  computed: {
    ...mapGetters({
      customers: `${CUSTOMER_STORE_KEY}/customers`,
      customersLoading: `${CUSTOMER_STORE_KEY}/customersLoading`
    })
  }
}
</script>
<style lang="sass">

</style>