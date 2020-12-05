<template>
  <div class="category-form">
    <Form
      :model="category"
      ref="category"
      :rules="validationRules"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="category.name" 
          name="name"
          type="text" 
          label="Name" 
          placeholder="Name" 
        />
      </section>
      <footer>
        <BaseButton
          :loading="categorySaveLoading"
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
import  Category  from '@/models/category'

const CATEGORY_STORE_KEY = 'categoryStore'

export default {
  components: { Form },
  data() {
    return {
      category: new Category(),
      validationRules: Category.validationRules(),
    }
  },
  props: {
    resource: {
      type: Object,
      default: () => new Category()
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
      const valid = await this.$refs.category.validate()
      if (!valid)
        return
      await this.$store.dispatch(`${CATEGORY_STORE_KEY}/${this.currentAction}Category`, { category: this.category })
      this.closeDrawer()
    },
  },
  computed: {
    ...mapGetters({
      products: `productStore/products`,
      categorySaveLoading: `categoryStore/categorySaveLoading`,
    }),
    creating() {
      return this.currentAction === 'create'
    },
    currentAction() {
      return _.get(this.category, 'id') ? 'update' : 'create'
    },
    loadingAction() {
      return _.get(this.category, 'id') ? 'updating' : 'creating'
    },
  },
  watch: {
    resource(newVal) {
      this.category = new Category({ ...newVal })
    }
  }
}
</script>