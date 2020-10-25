<template>
    <div class="table-index-page">
        <header>
          <h1>Products</h1>
        </header>
         <BaseTable
          :columns="columns"
          :data="products"
          :loading="productsLoading"
          :deletable="true"
        >
          <template #default="{ row }">
            <Tooltip
              placement="left-start"
              trigger="hover"
              content="Add Image"
            >
              <Icon
                class="pointer hover-green-text m-r-1" 
                type="md-image"
                size="19"
                @click.stop="handleAddImage(row)"
              />
            </Tooltip>
          </template>
        </BaseTable>
        <BaseDrawer
          v-model="uploadDrawer"
          title="Add Image"
        >
          <ImageUpload
            resource="product"
            v-if="uploadDrawer"
            :close-drawer="handleAddImage"
            :id="id"
            @on-upload="(a) => handleCloseImageDrawer(a)"
          />
        </BaseDrawer>
        <BaseDrawer
          v-model="showDrawer"
          title="Create Product"
        >
          <ProductNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <BaseButton class="m-l-1" @click="handleCreate">
          Create Product
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { PRODUCT_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip } from 'view-design'
import ProductNew from './new'
import ImageUpload from '@/components/image-upload'
import ProductShow from './show' 

const PRODUCT_STORE_KEY = 'productStore'

export default {
  components: {
    Icon,
    Tooltip,
    ProductNew,
    ImageUpload,
    ProductShow
  },
  data() {
    return {
      columns: PRODUCT_COLUMNS,
      uploadDrawer: false,
      id: null,
      showDrawer: false,
    }
  },
  mounted() {
    this.$store.dispatch(`${PRODUCT_STORE_KEY}/getProducts`)
  },
  methods: {
    handleCreate(){
      this.showDrawer = !this.showDrawer
    },
    handleAddImage(row) {
      this.id = row && row.id
      this.uploadDrawer = !this.uploadDrawer
    },
    handleCloseImageDrawer(a) {
      this.uploadDrawer = false
    }
  },
  computed: {
    ...mapGetters({
      products: `${PRODUCT_STORE_KEY}/products`,
      productsLoading: `${PRODUCT_STORE_KEY}/productsLoading`
    })
  }
}
</script>
<style lang="sass">

</style>