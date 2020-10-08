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
      @on-change="handleChange"
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
    },
    filter: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
     this.$store.dispatch(`${this.resource}Store/get${plural(_.upperFirst(this.resource))}`, { q: '' })
  },
  computed: {
    items() {
      return this.$store.getters[
        `${this.resource}Store/${plural(this.resource)}`
      ]
    }
  },
  methods: {
    handleChange() {
      if (!_.isEmpty(this.filter))
        this.$store.dispatch(`${this.resource}Store/get${plural(_.upperFirst(this.resource))}`, { q: '', ...this.filter })
    },
    dispatch: _.debounce(function(q = '') {
      let params = { q }
      if (!_.isEmpty(this.filter))
        params = { q, ...this.filter }
      this.$store.dispatch(`${this.resource}Store/get${plural(_.upperFirst(this.resource))}`, params)
    }, 600)
  }
}
</script>