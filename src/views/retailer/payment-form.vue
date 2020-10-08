<template>
  <div class="retailer-payment-form">
    <Form
      :model="retailer"
      ref="retailer-payment"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="retailer.name"
          type="text" 
          label="Payment Title" 
          placeholder="Payment Title " 
        />
        <BaseRemoteSelect
          placeholder="Select Retailer"
          v-model="retailer.retailerId"
          resource="retailer"
          @on-change="handleRetailerChange"
          clearable
        />
        <BaseRemoteSelect
          placeholder="Select Products of Retailer"
          v-model="retailer.productId"
          resource="product"
          :filter="{ retailerId: retailer.retailerId }"
          :disabled="!retailer.retailerId"
          clearable
        />
        <BaseInput 
          v-model="retailer.qty" 
          type="number"
          label="Quantity" 
          placeholder="Qty"
        />
      </section>
      <footer>
        <BaseButton
          :loading="retailerSaveLoading"
          html-type="submit"
        >
          Submit
        </BaseButton>
      </footer>
    </Form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Form } from 'view-design'
import  Retailer  from '@/models/retailer'

const RETAILER_STORE_KEY = 'retailerStore'

export default {
  components: { Form },
  data() {
    return {
      retailer: new Retailer()
    }
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true,
    }
  },
  mounted() {
  },
  methods: {
    async handleFormSubmit() {
      await this.$store.dispatch(`${RETAILER_STORE_KEY}/${this.currentAction}Retailer`, { retailer: this.retailer })
      this.closeDrawer()
    },
    handleRetailerChange() {
      this.retailer = new Retailer({ ...this.retailer, productId: "" })
    }
  },
  computed: {
    ...mapGetters({
      retailerSaveLoading: `retailerStore/retailerSaveLoading`,
    }),
  }
}
</script>