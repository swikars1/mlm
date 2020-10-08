<template>
  <CustomerForm :close-drawer="closeDrawer" />
</template>

<script>
import CustomerForm from './form'
export default {
  components: {
    CustomerForm
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true
    }
  }
}
</script>