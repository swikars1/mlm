<template>
  <div class="user-form">
    <Form
      :model="user"
      ref="user"
      :rules="validationRules"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="user.name" 
          name="name"
          type="text" 
          label="Name" 
          placeholder="Name" 
        />
        <BaseInput 
          v-model="user.email"
          name="email"
          type="text" 
          label="Email" 
          placeholder="Email" 
        />
        <BaseInput 
          v-model="user.phoneNo" 
          name="contactNumber"
          type="text" 
          label="Contact Number" 
          placeholder="Contact" 
        />
        <BaseInput 
          v-model="user.address"
          name="address"
          type="text" 
          label="Address" 
          placeholder="Address" 
        />
        <BaseInput 
          v-model="user.gender"
          name="gender"
          type="text" 
          label="Gender" 
          placeholder="Gender" 
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
      user: new User(),
      validationRules: User.validationRules()
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
      const valid = await this.$refs.user.validate()
      if (!valid)
        return
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