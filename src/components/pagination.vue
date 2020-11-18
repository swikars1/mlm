<template>
  <div>
    <Page
      :current="currentPage"
      :total="totalRecords"
      :page-size="perPage"
      @on-change="handlePaginationChange"
    />
  </div>
</template>

<script>
import { Page } from 'view-design'
import plural from '@/helpers/resource-name-pluralizer'

export const PaginationMixin = {
  computed: {
    resourceMeta() {
      const plularizeResource = plural(this.resource)
      return this.$store.getters[
        `${this.resource}Store/${plularizeResource}Meta`
      ]
    },
    totalRecords() {
      return _.isEmpty(this.resourceMeta.total)
        ? 0
        : parseInt(this.resourceMeta.total)
    },
    perPage() {
      return parseInt(this.resourceMeta.per_page) || 1
    },
    currentPage() {
      return parseInt(this.resourceMeta.page) || 1
    }
  },
  methods: {}
}

export default {
  mixins: [PaginationMixin],
  components: {
    Page
  },
  props: {
    extraParams: {
      type: Object,
      default: () => ({})
    },
    resource: {
      type: String,
      required: true
    },
    resourceName: {
      type: String,
      default: '',
    }
  },
  methods: {
    handlePaginationChange(page) {
      if (
        this.$listeners['on-change'] &&
        typeof this.$listeners['on-change'] === 'function'
      ) {
        this.$emit('on-change', page)
        return
      }
      const plularizeResource = _.upperFirst(
        plural(this.resource)
      )
      let params = { page, ...this.extraParams }
      if (this.resourceName) {
        params = {
          ...params,
          resourceName: this.resourceName
        }
      }
      this.$store.dispatch(
        `${this.resource}Store/get${plularizeResource}`,
        params
      )
    }
  }
}
</script>
