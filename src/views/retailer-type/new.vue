<template>
  <RetailerTypeForm :close-drawer="closeDrawer" />
</template>

<script>
import RetailerTypeForm from './form'
export default {
  components: {
    RetailerTypeForm
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true
    }
  }
}
</script>