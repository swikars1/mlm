<template>
  <CategoryForm
    :close-drawer="closeDrawer"
    :resource="resource"  
  />
</template>
<script>
import CategoryForm from './form'
import { mapGetters } from 'vuex'

const STORE_KEY = 'categoryStore'

export default {
  data() {
    return {
      resource: {}
    }
  },
  components: {
    CategoryForm
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
    this.$store.dispatch(`${STORE_KEY}/getCategory`, { id: this.id })
  },
  computed: {
    ...mapGetters({
      category: `${STORE_KEY}/category`,
    })
  },
  watch: {
    category(newVal) {
      this.resource = _.cloneDeep(newVal)
    }
  }
}
</script>
