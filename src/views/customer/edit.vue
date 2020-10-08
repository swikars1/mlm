<template>
  <CustomerForm
    :close-drawer="closeDrawer"
    :resource="resource"  
  />
</template>
<script>
import CustomerForm from './form'
import { mapGetters } from 'vuex'

const STORE_KEY = 'customerStore'

export default {
  data() {
    return {
      resource: {}
    }
  },
  components: {
    CustomerForm
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
    this.$store.dispatch(`${STORE_KEY}/getCustomer`, { id: this.id })
  },
  computed: {
    ...mapGetters({
      customer: `${STORE_KEY}/customer`,
    })
  },
  watch: {
    customer(newVal) {
      this.resource = _.cloneDeep(newVal)
    }
  }
}
</script>
