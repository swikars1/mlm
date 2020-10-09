<template>
  <FormItem
    :label="label"
    :prop="$attrs.name"
  >
    <Select
      v-bind="$attrs"
      v-on="$listeners"
      :items="items"
      @on-query-change="(q) => dispatch(q)"
      remote
      filterable
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
import plural from '@/helpers/resource-name-pluralizer'

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
    valuePath: {
      type: String,
      default: 'id'
    },
    labelPath: {
      type: String,
      default: 'name'
    },
    resource: {
      type: String,
      default: ''
    }
  },
  mounted() {
    let params = { q: '' }
    this.$store.dispatch(`${this.resource}Store/get${plural(_.upperFirst(this.resource))}`, params)
  },
  computed: {
    items() {
      return this.$store.getters[
        `${this.resource}Store/${plural(this.resource)}`
      ]
    }
  },
  methods: {
    dispatch: _.debounce(function(q = '') {
      this.$store.dispatch(`${this.resource}Store/get${plural(_.upperFirst(this.resource))}`, { q })
    }, 600)
  }
}
</script>