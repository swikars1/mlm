<template>
  <FormItem
    :label="label"
    :prop="$attrs.name"
  > 
    <Input
      prefix="ios-search"
      v-bind="$attrs"
      v-on="$listeners"
      v-model="searchQuery"
      @on-keyup="handleKeywordSearch"
    >
    </Input>
  </FormItem>
</template>

<script>
import plural from '@/helpers/resource-name-pluralizer'
import { Input, FormItem, Icon } from 'view-design'

export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  components: {
    Input,
    FormItem,
    Icon
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    resource: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleKeywordSearch: _.debounce(function(params) {
      this.$store.dispatch(`${this.resource}Store/get${plural(_.upperFirst(this.resource))}`, { q: this.searchQuery })
    }, 600)
  }
}
</script>