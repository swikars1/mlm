<!-- eslint-disable -->
<template>
  <FormItem
    :label="$attrs.label"
    :prop="$attrs.name"
  >
    <Input
      v-bind="$attrs"
      :type="type"
      v-on="$listeners"
    >
      <div slot="prepend" v-if="prepended">
        <slot name="prepend" />
      </div>
      <div slot="append" v-if="appended">
        <slot name="append" />
      </div>
    </Input>
  </FormItem>
</template>
<script>
import { Input, FormItem } from 'view-design'

const DEFINED_TYPES = ['text', 'textarea', 'password', 'number', 'tel', 'email']

export default {
  components: {
    Input,
    FormItem
  },
  props: {
    type: {
      type: String,
      default: DEFINED_TYPES[0],
      validator(value) {
        return DEFINED_TYPES.includes(value)
      }
    },
    prepended: {
      type: Boolean,
      default: false
    },
    appended: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="sass">
.description
  height: 40%
  margin-bottom: 0
  .ivu-form-item-content
    height: 100%
    .ivu-input-wrapper
      height: 100%
      textarea
        height: 75%
</style>