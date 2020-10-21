<template>
  <div class="customer-form">
    <Form
      :model="customer"
      ref="customer"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="customer.name" 
          type="text" 
          label="Name" 
          placeholder="Name" 
        />
        <BaseInput 
          v-model="customer.email" 
          v-if="creating"
          type="email" 
          label="Email" 
          placeholder="Email" 
        />
        <BaseInput 
          v-model="customer.password"
          v-if="creating"
          type="password" 
          label="Password" 
          placeholder="Password" 
        />
        <BaseInput 
          v-model="customer.phoneNo" 
          type="text" 
          label="Contact Number" 
          placeholder="Contact" 
        />
        <BaseInput 
          v-model="customer.referCode"
          v-if="creating"
          type="text" 
          label="Referal Code" 
          placeholder="Referal Code" 
        />
        <BaseInput 
          v-model="customer.address"
          type="text" 
          label="Address" 
          placeholder="Address" 
        />
        <BaseDatePicker
          v-model="customer.birthday" 
          name='birthday' 
          label="Date of birth" 
          placeholder="Select date"
        />
        <BaseRemoteSelect 
          placeholder="Select Retailer"
          v-model="customer.retailerId"
          v-if="creating"
          resource="retailer"
          @on-change="handleRetailerChange"
          clearable
        />
        <BaseSelect
          v-if="creating"
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
          v-if="creating"
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
          {{ currentAction.toUpperCase() }}
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
    resource: {
      type: Object,
      default: () => new Customer()
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
      await this.$store.dispatch(`${CUSTOMER_STORE_KEY}/${this.currentAction}Customer`, { customer: this.customer })
      this.closeDrawer()
    },
    getRetailerProducts(q) {
      this.$store.dispatch('productStore/getProducts', { q, retailerId: this.customer.retailerId })
    },
    handleRetailerChange() {
      this.$store.dispatch('productStore/getProducts', { retailerId: this.customer.retailerId })
      this.customer = new Customer({ ...this.customer, productId: "", qty: "" })
    }
  },
  computed: {
    ...mapGetters({
      products: `productStore/products`,
      customerSaveLoading: `customerStore/customerSaveLoading`,
    }),
    creating() {
      return this.currentAction === 'create'
    },
    currentAction() {
      return _.get(this.customer, 'id') ? 'update' : 'create'
    },
    loadingAction() {
      return _.get(this.customer, 'id') ? 'updating' : 'creating'
    },
  },
  watch: {
    resource(newVal) {
      this.customer = new Customer({ ...newVal })
    }
  }
}
</script>