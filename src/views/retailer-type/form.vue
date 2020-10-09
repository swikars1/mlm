<template>
  <div class="retailerType-form">
    <Form
      :model="retailerType"
      ref="retailerType"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="retailerType.name" 
          type="text" 
          label="Name" 
          placeholder="Name" 
        />
      </section>
      <footer>
        <BaseButton
          :loading="retailerTypeSaveLoading"
          html-type="submit"
        >
          {{ currentAction.toUpperCase() }}
        </BaseButton>
      </footer>
    </Form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Form } from 'view-design'
import  RetailerType  from '@/models/retailer-type'

const RETAILER_TYPE_STORE_KEY = 'retailerTypeStore'

export default {
  components: { Form },
  data() {
    return {
      retailerType: new RetailerType()
    }
  },
  props: {
    resource: {
      type: Object,
      default: () => new RetailerType()
    },
    closeDrawer: {
      type: Function,
      required: true,
    }
  },
  mounted() {
  },
  methods: {
    async handleFormSubmit() {
      await this.$store.dispatch(`${RETAILER_TYPE_STORE_KEY}/${this.currentAction}RetailerType`, { retailerType: this.retailerType })
      this.closeDrawer()
    },
  },
  computed: {
    ...mapGetters({
      products: `productStore/products`,
      retailerTypeSaveLoading: `retailerTypeStore/retailerTypeSaveLoading`,
    }),
    creating() {
      return this.currentAction === 'create'
    },
    currentAction() {
      return _.get(this.retailerType, 'id') ? 'update' : 'create'
    },
    loadingAction() {
      return _.get(this.retailerType, 'id') ? 'updating' : 'creating'
    },
  },
  watch: {
    resource(newVal) {
      this.retailerType = new RetailerType({ ...newVal })
    }
  }
}
</script>