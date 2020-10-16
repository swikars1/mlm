<template>
  <div class="product-form">
    <Form
      :model="product"
      ref="product"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="product.name" 
          type="text" 
          label="Name" 
          placeholder="Name" 
        />
        <BaseInput 
          v-model="product.price" 
          type="text" 
          label="Price" 
          placeholder="Price" 
        />
        <BaseInput 
          v-model="product.description"
          type="text" 
          label="Description" 
          placeholder="Description" 
        />
        <BaseInput 
          v-model="product.code"
          type="text" 
          label="Product Code" 
          placeholder="Product Code" 
        />
        <BaseRemoteSelect 
          placeholder="Select Retailer"
          v-model="product.retailerId"
          resource="retailer"
          clearable
        />
      </section>
      <footer>
        <BaseButton
          :loading="productSaveLoading"
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
import  Product  from '@/models/product'

const PRODUCT_STORE_KEY = 'productStore'

export default {
  components: { Form },
  data() {
    return {
      product: new Product()
    }
  },
  props: {
    resource: {
      type: Object,
      default: () => new Product()
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
      await this.$store.dispatch(`${PRODUCT_STORE_KEY}/${this.currentAction}Product`, { product: this.product })
      this.closeDrawer()
    },
  },
  computed: {
    ...mapGetters({
      products: `productStore/products`,
      productSaveLoading: `productStore/productSaveLoading`,
    }),
    creating() {
      return this.currentAction === 'create'
    },
    currentAction() {
      return _.get(this.product, 'id') ? 'update' : 'create'
    },
    loadingAction() {
      return _.get(this.product, 'id') ? 'updating' : 'creating'
    },
  },
  watch: {
    resource(newVal) {
      this.product = new Product({ ...newVal })
    }
  }
}
</script>