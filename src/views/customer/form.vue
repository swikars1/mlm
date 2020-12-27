<template>
  <div class="customer-form">
    <Form
      :model="customer"
      ref="customer"
      :rules="validationRules"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="customer.name"
          name="name"
          type="text" 
          label="Name" 
          placeholder="Name" 
        />
        <BaseInput 
          v-model="customer.email" 
          v-if="creating"
          name="email"
          type="email" 
          label="Email" 
          placeholder="Email" 
        />
        <BaseSelect
          label="Select Gender"
          placeholder="Select Gender"
          name="gender"
          v-model="customer.gender"
          :items="[{ name: 'Male', id: 'Male' }, { name: 'Female', id: 'Female' }]"
        />
        <BaseInput 
          v-model="customer.password"
          v-if="creating"
          name="password"
          type="password" 
          label="Password" 
          placeholder="Password" 
        />
        <BaseInput 
          v-model="customer.phoneNo" 
          name="phoneNo"
          type="text" 
          label="Contact Number" 
          placeholder="Contact" 
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
          placeholder="Date of birth"
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
      customer: new Customer(),
      validationRules: Customer.validationRules(),
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
      const valid = await this.$refs.customer.validate()
      if (!valid)
        return
      await this.$store.dispatch(`${CUSTOMER_STORE_KEY}/${this.currentAction}Customer`, { customer: this.customer })
      this.closeDrawer()
    },
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