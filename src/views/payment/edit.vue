<template>
  <PaymentForm
    :close-drawer="closeDrawer"
    :resource="resource"  
  />
</template>
<script>
import PaymentForm from './form'
import { mapGetters } from 'vuex'

const STORE_KEY = 'paymentStore'

export default {
  data() {
    return {
      resource: {}
    }
  },
  components: {
    PaymentForm
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
    this.$store.dispatch(`${STORE_KEY}/getPayment`, { id: this.id })
  },
  computed: {
    ...mapGetters({
      payment: `${STORE_KEY}/payment`,
    })
  },
  watch: {
    payment(newVal) {
      this.resource = _.cloneDeep(newVal)
    }
  }
}
</script>
