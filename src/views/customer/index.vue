<template>
    <div class="table-index-page">
        <header>
          <h1>Customers</h1>
          <Form>
            <BaseSearch
              placeholder="Search Customer"
              resource="customer"
            />
          </Form>
        </header>
         <BaseTable
          :columns="columns"
          :data="customers"
          :loading="customersLoading"
          :deletable="false"
          :editable="false"
        > 
          <template #default="{ row }">
            <Tooltip
              placement="left-start"
              trigger="hover"
              content="Add Purchase"
            >
              <Icon
                class="pointer hover-green-text m-r-1" 
                type="md-cash"
                size="20"
                @click.stop="handlePayment(row)"
              />
            </Tooltip>
            <Tooltip
              placement="left-start"
              trigger="hover"
              content="Add Documents"
            >
              <Icon
                class="pointer hover-green-text m-r-1" 
                type="md-images"
                size="19"
                @click.stop="handleDocumentsDrawer(row)"
              />
            </Tooltip>
          </template>
        </BaseTable>
        <BaseDrawer
          v-model="documentsDrawer"
          title="Upload Documents"
        >
          <MultiImageUpload
            :details="documentImages"
            resource="customer"
            v-if="documentsDrawer"
            :id="id"
          />
        </BaseDrawer>
        <BaseDrawer
          v-model="paymentDrawer"
          title="Add Purchase"
        >
          <PaymentForm
            v-if="paymentDrawer"
            :close-drawer="handlePayment"
            :id="id"
          />
        </BaseDrawer>
        <BaseDrawer
          v-model="showDrawer"
          title="Create Customer"
        >
          <CustomerNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <Pagination
          resource="customer"
        />
        <BaseButton class="m-l-1" @click="handleCreate">
          Create Customer
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { CUSTOMER_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip, Form } from 'view-design'
import CustomerNew from './new'
import PaymentForm from './payment-form'
import Customer from '@/models'
import MultiImageUpload from '@/components/multi-image-upload'
import CustomerShow from './show.vue'
import Pagination, { PaginationMixin } from '@/components/pagination'

const CUSTOMER_STORE_KEY = 'customerStore'

export default {
  mixins: [PaginationMixin],
  components: {
    Icon,
    Tooltip,
    CustomerNew,
    PaymentForm,
    CustomerShow,
    Pagination,
    Form,
    MultiImageUpload
  },
  data() {
    return {
      columns: CUSTOMER_COLUMNS,
      showDrawer: false,
      paymentDrawer: false,
      id: null,
      documentsDrawer: false,
      documentImages: [{ label: 'Add Front Page', type: 'front' }, { label: 'Add Back Page', type: 'back' }]
    }
  },
  mounted() {
    this.$store.dispatch(`${CUSTOMER_STORE_KEY}/getCustomers`)
  },
  methods: {
    handleDocumentsDrawer(row) {
      this.id = row && row.id
      this.documentsDrawer = !this.documentsDrawer
    },
    handleCreate(){
      this.showDrawer = !this.showDrawer
    },
    handlePayment(row) {
      this.id = row && row.id
      this.paymentDrawer = !this.paymentDrawer
    },
  },
  computed: {
    ...mapGetters({
      customers: `${CUSTOMER_STORE_KEY}/customers`,
      customersLoading: `${CUSTOMER_STORE_KEY}/customersLoading`
    })
  }
}
</script>
<style lang="sass">

</style>