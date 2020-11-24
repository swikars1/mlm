<template>
    <div class="table-index-page">
        <header>
          <h1>Users</h1>
          <Form>
            <BaseSearch
              placeholder="Search User"
              resource="user" 
            />
          </Form>
        </header>
         <BaseTable
          :columns="columns"
          :data="users"
          :loading="usersLoading"
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
            resource="user"
            v-if="uploadDrawer"
            :close-drawer="handleAddImage"
            :id="id"
            @on-upload="(a) => handleCloseImageDrawer(a)"
          />
        </BaseDrawer>
        <BaseDrawer
          v-model="showDrawer"
          title="Create User"
        >
          <UserNew
            v-if="showDrawer"
            :close-drawer="handleCreate"
          />
        </BaseDrawer>
      <footer class="table-footer">
        <Pagination
          resource="user"
        />
        <BaseButton class="m-l-1" @click="handleCreate">
          Create User
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { USER_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip, Form } from 'view-design'
import UserNew from './new'
import ImageUpload from '@/components/image-upload'
import Pagination, { PaginationMixin } from '@/components/pagination'



const USER_STORE_KEY = 'userStore'

export default {
  mixins: [PaginationMixin],
  components: {
    Icon,
    Tooltip,
    UserNew,
    ImageUpload,
    Pagination,
    Form
  },
  data() {
    return {
      columns: USER_COLUMNS,
      uploadDrawer: false,
      id: null,
      showDrawer: false,
      paymentDrawer: false
    }
  },
  mounted() {
    this.$store.dispatch(`${USER_STORE_KEY}/getUsers`)
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
      users: `${USER_STORE_KEY}/users`,
      usersLoading: `${USER_STORE_KEY}/usersLoading`
    })
  }
}
</script>
<style lang="sass">

</style>