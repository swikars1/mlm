<template>
  <div class="customer-payment-form">
    <Form
      :model="customer"
      ref="customer-payment"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="customer.name"
          type="text" 
          label="Payment Title" 
          placeholder="Payment Title " 
        />
        <BaseRemoteSelect
          placeholder="Select Retailer"
          v-model="customer.retailerId"
          resource="retailer"
          @on-change="handleRetailerChange"
          clearable
        />
        <BaseRemoteSelect
          placeholder="Select Products of Retailer"
          v-model="customer.productId"
          resource="product"
          :filter="{ retailerId: customer.retailerId }"
          :disabled="!customer.retailerId"
          clearable
        />
        <BaseInput 
          v-model="customer.qty" 
          type="number"
          label="Quantity" 
          placeholder="Qty"
        />
      </section>
      <footer>
        <BaseButton
          :loading="customerSaveLoading"
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
import  Customer  from '@/models/customer'

const CUSTOMER_STORE_KEY = 'customerStore'

export default {
  components: { Form },
  data() {
    return {
      customer: new Customer()
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
      await this.$store.dispatch(`${CUSTOMER_STORE_KEY}/${this.currentAction}Customer`, { customer: this.customer })
      this.closeDrawer()
    },
    handleRetailerChange() {
      this.customer = new Customer({ ...this.customer, productId: "" })
    }
  },
  computed: {
    ...mapGetters({
      customerSaveLoading: `customerStore/customerSaveLoading`,
    }),
  }
}
</script>