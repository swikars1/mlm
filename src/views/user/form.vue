<template>
  <div class="user-form">
    <Form
      :model="user"
      ref="user"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="user.name" 
          type="text" 
          label="Name" 
          placeholder="Name" 
        />
        <BaseInput 
          v-model="user.phoneNo" 
          type="text" 
          label="Contact Number" 
          placeholder="Contact" 
        />
        <BaseInput 
          v-model="user.address"
          type="text" 
          label="Address" 
          placeholder="Address" 
        />
        <BaseInput 
          v-model="user.panNumber"
          type="text" 
          label="Pan Number" 
          placeholder="Pan Number" 
        />
        <BaseRemoteSelect 
          placeholder="Select User"
          v-model="user.userId"
          v-if="creating"
          resource="user"
          clearable
        />
      </section>
      <footer>
        <BaseButton
          :loading="userSaveLoading"
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
import  User  from '@/models/user'

const USER_STORE_KEY = 'userStore'

export default {
  components: { Form },
  data() {
    return {
      user: new User()
    }
  },
  props: {
    resource: {
      type: Object,
      default: () => new User()
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
      await this.$store.dispatch(`${USER_STORE_KEY}/${this.currentAction}User`, { user: this.user })
      this.closeDrawer()
    },
  },
  computed: {
    ...mapGetters({
      products: `productStore/products`,
      userSaveLoading: `userStore/userSaveLoading`,
    }),
    creating() {
      return this.currentAction === 'create'
    },
    currentAction() {
      return _.get(this.user, 'id') ? 'update' : 'create'
    },
    loadingAction() {
      return _.get(this.user, 'id') ? 'updating' : 'creating'
    },
  },
  watch: {
    resource(newVal) {
      this.user = new User({ ...newVal })
    }
  }
}
</script>