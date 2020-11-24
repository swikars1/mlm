<template>
    <div class="table-index-page">
        <header>
          <h1>Retailers</h1>
           <Form>
            <BaseSearch
              placeholder="Search Retailer"
              resource="retailer"
            />
          </Form>
        </header>
         <BaseTable
          :columns="columns"
          :data="retailers"
          :loading="retailersLoading"
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
                @click="handleAddImage(row)"
              />
            </Tooltip>
          </template>
        </BaseTable>
        <BaseDrawer
          v-model="uploadDrawer"
          title="Add Image"
        >
          <ImageUpload
            resource="retailer"
            v-if="uploadDrawer"
            :close-drawer="handleAddImage"
            :id="id"
            @on-upload="(a) => handleCloseImageDrawer(a)"
          />
        </BaseDrawer>
        <BaseDrawer
          v-model="showDrawer"
          title="Create Retailer"
        >
          <RetailerNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <Pagination
          resource="retailer"
        />
        <BaseButton class="m-l-1" @click="handleCreate">
          Create Retailer
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { RETAILER_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip, Form  } from 'view-design'
import RetailerNew from './new'
import ImageUpload from '@/components/image-upload'
import RetailerShow from './show'
import Pagination, { PaginationMixin } from '@/components/pagination'

const RETAILER_STORE_KEY = 'retailerStore'

export default {
  mixins: [PaginationMixin],
  components: {
    Icon,
    Tooltip,
    RetailerNew,
    ImageUpload,
    RetailerShow,
    Pagination,
    Form 

  },
  data() {
    return {
      columns: RETAILER_COLUMNS,
      showDrawer: false,
      uploadDrawer: false,
      id: null
    }
  },
  mounted() {
    this.$store.dispatch(`${RETAILER_STORE_KEY}/getRetailers`)
  },
  methods: {
    handleCreate() {
      this.showDrawer = !this.showDrawer
    },
    handleAddImage(row) {
      this.id = row && row.id
      this.uploadDrawer = !this.uploadDrawer
    },
    handleCloseImageDrawer(a) {
      this.uploadDrawer = false
    },
  },
  computed: {
    ...mapGetters({
      retailers: `${RETAILER_STORE_KEY}/retailers`,
      retailersLoading: `${RETAILER_STORE_KEY}/retailersLoading`
    })
  }
}
</script>
<style lang="sass">

</style>