<template>
  <Button
    v-bind="$attrs"
    :type="type"
    :size="size"
    v-on="$listeners"
  >
    <slot />
  </Button>
</template>

<script>
import { Button } from 'view-design'

const DEFINED_TYPES = [
  'primary',
  'dashed',
  'text',
  'info',
  'success',
  'warning',
  'error',
  'default'
]

export default {
  components: {
    Button
  },
  props: {
    type: {
      type: String,
      default: DEFINED_TYPES[4],
      validator(value) {
        return DEFINED_TYPES.includes(value)
      }
    },
    size: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped>
</style>