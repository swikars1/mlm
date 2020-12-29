<template>
  <div class="customer-payment-form">
    <Form
      :model="payment"
      ref="customerpayment"
      :rules="validationRules"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseRemoteSelect
          placeholder="Select Customer"
          label="Select Customer"
          v-model="payment.customerId"
          resource="customer"
          clearable
        />
        <BaseInput 
          v-model="payment.name"
          name="name"
          type="text" 
          label="Payment Title" 
          placeholder="Payment Title" 
        />
        <BaseInput 
          v-model="payment.billNo" 
          type="text"
          name="billNo"
          label="Bill Number" 
          placeholder="Bill Number"
        />
        <BaseRemoteSelect
          placeholder="Select Shop"
          v-model="payment.retailerId"
          resource="retailer"
          label="Select Shop"
          clearable
        />
        <BaseInput 
          v-model="payment.expenditure" 
          type="number"
          name="expenditure"
          label="Expenditure"
          placeholder="Expenditure"
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
      payment: new Payment(),
      validationRules: Payment.customerPaymentRules(),
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
      const valid = await this.$refs.customerpayment.validate()
      if (!valid || !this.payment.customerId || !this.payment.retailerId)
        return
      await this.$store.dispatch(`${PAYMENT_STORE_KEY}/createPayment`, { payment: this.payment })
      await this.$store.dispatch(`${PAYMENT_STORE_KEY}/getPayments`)
      this.closeDrawer()
    },
  },
  computed: {
    ...mapGetters({
      paymentSaveLoading: `paymentStore/paymentSaveLoading`,
      products: `productStore/products`
    }),
  }
}
</script>