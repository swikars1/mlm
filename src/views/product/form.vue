<template>
  <div class="product-form">
    <Form
      :model="product"
      ref="product"
      :rules="validationRules"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="product.name" 
          name="name"
          type="text" 
          label="Name" 
          placeholder="Name" 
        />
        <BaseInput 
          v-model="product.price" 
          name="price"
          type="number" 
          label="Price" 
          placeholder="Price" 
        />
        <BaseInput 
          v-model="product.description"
          name="description"
          type="text" 
          label="Description" 
          placeholder="Description" 
        />
        <BaseInput 
          v-model="product.code"
          name="code"
          type="text" 
          label="Product Code" 
          placeholder="Product Code" 
        />
        <BaseSelect 
          :items="categories"
          label="Select Categories"
          placeholder="Select Categories"
          v-model="product.categoryIds"
          remote
          filterable
          multiple
          clearable
        />
        <BaseRemoteSelect 
          placeholder="Select Retailer"
          v-model="product.retailerId"
          label="Select Retailer"
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
      product: new Product(),
      validationRules: Product.validationRules(),

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
    this.$store.dispatch(`categoryStore/getCategories`)
  },
  methods: {
    async handleFormSubmit() {
      const valid = await this.$refs.product.validate()
      if (!valid)
        return
      await this.$store.dispatch(`${PRODUCT_STORE_KEY}/${this.currentAction}Product`, { product: this.product })
      this.closeDrawer()
    },
  },
  computed: {
    ...mapGetters({
      products: `productStore/products`,
      productSaveLoading: `productStore/productSaveLoading`,
      categories: `categoryStore/categories`
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