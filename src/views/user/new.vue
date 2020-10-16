<template>
  <UserForm :close-drawer="closeDrawer" />
</template>

<script>
import UserForm from './form'
export default {
  components: {
    UserForm
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true
    }
  }
}
</script>