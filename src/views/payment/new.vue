<template>
  <PaymentForm :close-drawer="closeDrawer" />
</template>

<script>
import PaymentForm from './form'
export default {
  components: {
    PaymentForm
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true
    }
  }
}
</script>