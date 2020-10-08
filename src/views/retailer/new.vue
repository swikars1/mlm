<template>
  <RetailerForm :close-drawer="closeDrawer" />
</template>

<script>
import RetailerForm from './form'
export default {
  components: {
    RetailerForm
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true
    }
  }
}
</script>