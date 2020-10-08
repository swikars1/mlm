<template>
  <Modal
    :title="title"
    v-bind="$attrs"
    :value="$attrs.value"
    v-on="$listeners"
    @on-cancel="() => $listeners.input && $listeners.input()"
  >
    <slot />
  </Modal>
</template>
<script>
import { Modal } from 'view-design'
export default {
  components: {
    Modal
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
