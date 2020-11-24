<template>
    <div class="table-index-page">
        <header>
          <h1>Categories</h1>  
          <Form>
            <BaseSearch
              placeholder="Search Category"
              resource="category"
            />
          </Form>        
        </header>
         <BaseTable
          :columns="columns"
          :data="categories"
          :loading="categoriesLoading"
          :deletable="true"
          :editable="true"
          @on-row-click="() => {}"
        >
          
        </BaseTable>
        <BaseDrawer
          v-model="showDrawer"
          title="Create Category"
        >
          <CategoryNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <Pagination
          resource="category"
        />
        <BaseButton class="m-l-1" @click="handleCreate">
          Create Category
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { CATEGORY_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip, Form } from 'view-design'
import CategoryNew from './new'
import CategoryShow from './show' 
import Pagination, { PaginationMixin } from '@/components/pagination'


const CATEGORY_STORE_KEY = 'categoryStore'

export default {
  mixins: [PaginationMixin],
  components: {
    Icon,
    Tooltip,
    CategoryNew,
    CategoryShow,
    Pagination,
    Form
  },
  data() {
    return {
      columns: CATEGORY_COLUMNS,
      showDrawer: false,
    }
  },
  mounted() {
    this.$store.dispatch(`${CATEGORY_STORE_KEY}/getCategories`)
  },
  methods: {
    handleCreate(){
      this.showDrawer = !this.showDrawer
    },
    
  },
  computed: {
    ...mapGetters({
      categories: `${CATEGORY_STORE_KEY}/categories`,
      categoriesLoading: `${CATEGORY_STORE_KEY}/categoriesLoading`
    })
  }
}
</script>
<style lang="sass">

</style>