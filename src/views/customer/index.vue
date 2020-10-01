p<template>
    <div>
      <h1>customers</h1>
       <BaseTable :columns="columns" :data="customers" :loading="customersLoading" ></BaseTable>
    </div>
</template>

<script>
 
import { mapGetters } from 'vuex'
import { CUSTOMER_COLUMNS } from '@/helpers/columns'

const CUSTOMER_STORE_KEY = 'customerStore'

export default {
  data() {
    return {
      columns: CUSTOMER_COLUMNS,
    }
  },
  mounted() {
    this.$store.dispatch(`${CUSTOMER_STORE_KEY}/getCustomers`)
  },
  computed: {
    ...mapGetters({
      customers: `${CUSTOMER_STORE_KEY}/customers`,
      customersLoading: `${CUSTOMER_STORE_KEY}/customersLoading`
    })
  }
}
</script>