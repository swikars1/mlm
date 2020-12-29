<template>
  <div class="customer-payment-form">
    <Form
      :model="customer"
      ref="paymentcus"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
      :rules="paymentValidation"
    >
      <section>
        <BaseInput 
          v-model="customer.name"
          type="text" 
          name="name"
          label="Payment Title" 
          placeholder="Payment Title " 
        />
        <BaseInput 
          v-model="customer.billNo" 
          type="text"
          name="billNo"
          label="Bill Number" 
          placeholder="Bill Number"
        />
        <BaseRemoteSelect
          placeholder="Select Shop"
          label="Select Shop"
          name="retailerId" 
          v-model="customer.retailerId"
          resource="retailer"
          clearable
        />
        <BaseInput 
          v-model="customer.expenditure" 
          type="number"
          name="expenditure"
          label="Expenditure"
          placeholder="Expenditure"
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
import Customer from '@/models/customer'
import Payment from '@/models/payment'

const CUSTOMER_STORE_KEY = 'customerStore'

export default {
  components: { Form },
  data() {
    return {
      customer: new Customer(),
      paymentValidation: Payment.customerPaymentRules()
    }
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true,
    },
    id: {
      type: Number,
      required: true
    }
  },
  mounted() {
    if(this.id) this.customer = new Customer({ ...this.customer, id: this.id })
  },
  methods: {
    async handleFormSubmit() {
      const valid = await this.$refs.paymentcus.validate()
      if (!valid || !this.customer.retailerId)
        return
      await this.$store.dispatch(`${CUSTOMER_STORE_KEY}/addPayment`, { customer: this.customer })      
      this.closeDrawer()
    },
  },
  computed: {
    ...mapGetters({
      customerSaveLoading: `customerStore/customerSaveLoading`,
      products: `productStore/products`
    }),
  },
  watch: {
    id(newVal) {
      this.customer = new Customer({ ...this.customer, id: newVal })
    }
  }
}
</script>