<template>
    <div class="table-index-page">
        <header>
          <h1>RetailerTypes</h1>
        </header>
         <BaseTable
          :columns="columns"
          :data="retailerTypes"
          :loading="retailerTypesLoading"
          :deletable="true"
          :editable="true"
          @on-row-click="() => {}"
        >
          
        </BaseTable>
        <BaseDrawer
          v-model="showDrawer"
          title="Create RetailerType"
        >
          <RetailerTypeNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <Pagination
          resource="retailerType"
        />
        <BaseButton class="m-l-1" @click="handleCreate">
          Create RetailerType
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { RETAILER_TYPE_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip } from 'view-design'
import RetailerTypeNew from './new'
import RetailerTypeShow from './show' 
import Pagination, { PaginationMixin } from '@/components/pagination'


const RETAILER_TYPE_STORE_KEY = 'retailerTypeStore'

export default {
  mixins: [PaginationMixin],
  components: {
    Icon,
    Tooltip,
    RetailerTypeNew,
    RetailerTypeShow,
    Pagination
  },
  data() {
    return {
      columns: RETAILER_TYPE_COLUMNS,
      showDrawer: false,
    }
  },
  mounted() {
    this.$store.dispatch(`${RETAILER_TYPE_STORE_KEY}/getRetailerTypes`)
  },
  methods: {
    handleCreate(){
      this.showDrawer = !this.showDrawer
    },
    
  },
  computed: {
    ...mapGetters({
      retailerTypes: `${RETAILER_TYPE_STORE_KEY}/retailerTypes`,
      retailerTypesLoading: `${RETAILER_TYPE_STORE_KEY}/retailerTypesLoading`
    })
  }
}
</script>
<style lang="sass">

</style>