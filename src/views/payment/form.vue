<template>
  <div class="customer-payment-form">
    <Form
      :model="payment"
      ref="customer-payment"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseRemoteSelect
          placeholder="Select Customer"
          v-model="payment.customerId"
          resource="customer"
          clearable
        />
        <BaseInput 
          v-model="payment.name"
          type="text" 
          label="Payment Title" 
          placeholder="Payment Title " 
        />
        <BaseRemoteSelect
          placeholder="Select Retailer"
          v-model="payment.retailerId"
          resource="retailer"
          @on-change="handleRetailerChange"
          clearable
        />
        <BaseSelect
          placeholder="Select Products of Retailer"
          v-model="payment.productId"
          :items="products"
          :disabled="!payment.retailerId"
          @on-query-change="q => getRetailerProducts(q)"
          filterable
          remote
          clearable
        />
        <BaseInput 
          v-model="payment.qty" 
          type="number"
          label="Quantity" 
          placeholder="Qty"
          :disabled="!payment.productId"
        />
      </section>
      <footer>
        <BaseButton
          :loading="paymentSaveLoading"
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
import  Payment  from '@/models/payment'

const PAYMENT_STORE_KEY = 'paymentStore'

export default {
  components: { Form },
  data() {
    return {
      payment: new Payment()
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
      await this.$store.dispatch(`${PAYMENT_STORE_KEY}/createPayment`, { payment: this.payment })
      await this.$store.dispatch(`${PAYMENT_STORE_KEY}/getPayments`)
      this.closeDrawer()
    },
    getRetailerProducts(q) {
      this.$store.dispatch('productStore/getProducts', { q, retailerId: this.payment.retailerId })
    },
    handleRetailerChange() {
      this.$store.dispatch('productStore/getProducts', { retailerId: this.payment.retailerId })
      this.payment = new Payment({ ...this.payment, productId: "" })
    }
  },
  computed: {
    ...mapGetters({
      paymentSaveLoading: `paymentStore/paymentSaveLoading`,
      products: `productStore/products`
    }),
  }
}
</script>