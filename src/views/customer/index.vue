<template>
    <div>
        <h1>customers</h1>
        {{ customers }}
    </div>
</template>

<script>
 
import { mapGetters } from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('customerStore/getCustomers',{id:1})
  },
  computed: {
    ...mapGetters({
      customers: 'customerStore/customers'
    })
  }
}
</script>