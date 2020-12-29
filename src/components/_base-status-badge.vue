<template>
  <span
    v-if="plain"
    :class="color"
  >
    {{ status | humanize }}
  </span>
  <Tag
    v-else
    :color="color"
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{
      status | humanize
    }}
  </Tag>
</template>
<script>
import { Tag } from 'view-design'

const BADGE_RED = ['Inactive']
const BADGE_GREEN = ['Active']

export default {
  components: {
    Tag
  },
  props: {
    status: {
      type: String,
      default: ''
    },
    statusColor: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    color() {
      let badgeColor = 'blue'
      if (
        _.includes(BADGE_RED, this.status.toLowerCase())
      ) {
        badgeColor = 'red'
      } else if (
        _.includes(BADGE_GREEN, this.status.toLowerCase())
      ) {
        badgeColor = 'green'
      }
      return this.statusColor || badgeColor
    }
  }
}
</script>
<style lang="sass" scoped>
  .blue
    color: blue
  .red
    color: red
  .green
    color: green
  .warning
    color: orange
</style>
