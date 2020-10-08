<template>
  <FormItem
    class="form-item-date-picker"
    :label="$attrs.label"
    :prop="$attrs.name"
  >
    <DatePicker
      class="date-picker"
      v-bind="$attrs"
      :type="type"
      v-on="$listeners"
    />
  </FormItem>
</template>

<script>
import { DatePicker, FormItem } from 'view-design'

export default {
  props: {
    type: {
      type: String,
      default: 'date'
    },
  },
  components: {
    DatePicker,
    FormItem
  }
}
</script>