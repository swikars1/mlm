<template>
  <RetailerForm
    :close-drawer="closeDrawer"
    :resource="resource"  
  />
</template>
<script>
import RetailerForm from './form'
import { mapGetters } from 'vuex'

const STORE_KEY = 'retailerStore'

export default {
  data() {
    return {
      resource: {}
    }
  },
  components: {
    RetailerForm
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
    this.$store.dispatch(`${STORE_KEY}/getRetailer`, { id: this.id })
  },
  computed: {
    ...mapGetters({
      retailer: `${STORE_KEY}/retailer`,
    })
  },
  watch: {
    retailer(newVal) {
      this.resource = _.cloneDeep(newVal)
    }
  }
}
</script>
