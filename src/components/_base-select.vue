<template>
  <FormItem
    :label="label"
    :prop="$attrs.name"
  >
    <Select
      v-bind="$attrs"
      :clearable="clearable"
      v-on="$listeners"
    >
      <Option
        v-for="(item, index) in items"
        :key="`${item[valuePath]}-${index}`"
        :value="item[valuePath] || item"
        :disabled="item.disabled"
      >
        {{ item[labelPath] || item }}
      </Option>
    </Select>
  </FormItem>
</template>

<script>
import { Select, Option, FormItem } from 'view-design'

export default {
  components: {
    Select,
    Option,
    FormItem
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      required: true
    },
    valuePath: {
      type: String,
      default: 'id'
    },
    labelPath: {
      type: String,
      default: 'name'
    },
    clearable: {
      type: Boolean,
      default: false
    },
  }
}
</script>