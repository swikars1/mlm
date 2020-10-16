<template>
  <UserForm
    :close-drawer="closeDrawer"
    :resource="resource"  
  />
</template>
<script>
import UserForm from './form'
import { mapGetters } from 'vuex'

const STORE_KEY = 'userStore'

export default {
  data() {
    return {
      resource: {}
    }
  },
  components: {
    UserForm
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
    this.$store.dispatch(`${STORE_KEY}/getUser`, { id: this.id })
  },
  computed: {
    ...mapGetters({
      user: `${STORE_KEY}/user`,
    })
  },
  watch: {
    user(newVal) {
      this.resource = _.cloneDeep(newVal)
    }
  }
}
</script>
