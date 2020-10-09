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
        <BaseSelect
          placeholder="Select Products of Retailer"
          v-model="customer.productId"
          :items="products"
          :disabled="!customer.retailerId"
          @on-query-change="q => getRetailerProducts(q)"
          filterable
          remote
          clearable
        />
        <BaseInput 
          v-model="customer.qty" 
          type="number"
          label="Quantity" 
          placeholder="Qty"
          :disabled="!customer.productId"
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
    getRetailerProducts(q) {
      this.$store.dispatch('productStore/getProducts', { q, retailerId: this.customer.retailerId })
    },
    handleRetailerChange() {
      this.$store.dispatch('productStore/getProducts', { retailerId: this.customer.retailerId })
      this.customer = new Customer({ ...this.customer, productId: "" })
    }
  },
  computed: {
    ...mapGetters({
      customerSaveLoading: `customerStore/customerSaveLoading`,
      products: `productStore/products`
    }),
  }
}
</script>