<template>
  <RetailerTypeForm
    :close-drawer="closeDrawer"
    :resource="resource"  
  />
</template>
<script>
import RetailerTypeForm from './form'
import { mapGetters } from 'vuex'

const STORE_KEY = 'retailerTypeStore'

export default {
  data() {
    return {
      resource: {}
    }
  },
  components: {
    RetailerTypeForm
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
    this.$store.dispatch(`${STORE_KEY}/getRetailerType`, { id: this.id })
  },
  computed: {
    ...mapGetters({
      retailerType: `${STORE_KEY}/retailerType`,
    })
  },
  watch: {
    retailerType(newVal) {
      this.resource = _.cloneDeep(newVal)
    }
  }
}
</script>
