<template>
  <Drawer
    class="drawer"
    v-bind="$attrs"
    :value="value"
    :placement="placement"
    :title="title"
    :closable="closable"
    :width="width"
    v-on="$listeners"
    @on-close="() => $listeners.change"
    :mask-closable="false"
    :draggable="true"
  >
    <slot />
  </Drawer>
</template>
<script>
import { Drawer } from 'view-design'

export default {
  props: {
    placement: {
      type: String,
      default: 'right'
    },
    title: {
      type: String,
      required: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '30%'
    },
  },
  components: {
    Drawer
  },
}
</script>
