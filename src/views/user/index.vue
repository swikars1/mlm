<template>
    <div class="table-index-page">
        <header>
          <h1>Users</h1>
        </header>
         <BaseTable
          :columns="columns"
          :data="users"
          :loading="usersLoading"
          :deletable="true"
        >
          
        </BaseTable>
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
        <BaseButton class="m-l-1" @click="handleCreate">
          Create User
        </BaseButton>
      </footer>
    </div>
</template>


<script>
 
import { mapGetters } from 'vuex'
import { USER_COLUMNS } from '@/helpers/columns'
import { Icon, Tooltip } from 'view-design'
import UserNew from './new'

const USER_STORE_KEY = 'userStore'

export default {
  components: {
    Icon,
    Tooltip,
    UserNew,
  },
  data() {
    return {
      columns: USER_COLUMNS,
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
    handlePayment() {
      this.paymentDrawer = !this.paymentDrawer
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