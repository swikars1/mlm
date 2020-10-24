<template>
  <CategoryForm :close-drawer="closeDrawer" />
</template>

<script>
import CategoryForm from './form'
export default {
  components: {
    CategoryForm
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true
    }
  }
}
</script>