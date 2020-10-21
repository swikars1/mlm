<template>
  <div class="retailer-form">
    <Form
      :model="retailer"
      ref="retailer"
      @submit.native.prevent="handleFormSubmit"
      label-position="top"
    >
      <section>
        <BaseInput 
          v-model="retailer.name" 
          type="text" 
          label="Name" 
          placeholder="Name" 
        />
        <BaseInput 
          v-model="retailer.phoneNo" 
          type="text" 
          label="Contact Number" 
          placeholder="Contact" 
        />
        <BaseInput 
          v-model="retailer.address"
          type="text" 
          label="Address" 
          placeholder="Address" 
        />
        <BaseInput 
          v-model="retailer.panNumber"
          type="text" 
          label="Pan Number" 
          placeholder="Pan Number" 
        />
        <BaseRemoteSelect 
          placeholder="Select Retailer"
          v-model="retailer.retailerTypeId"
          v-if="creating"
          resource="retailerType"
          clearable
        />
      </section>
      <footer>
        <BaseButton
          :loading="retailerSaveLoading"
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
import  Retailer  from '@/models/retailer'
import base64ToBlob from '@/helpers/base64-to-blob'

const RETAILER_STORE_KEY = 'retailerStore'

export default {
  components: { Form },
  data() {
    return {
      retailer: new Retailer(),
      imgSrc: null,
      retailerImage: null
    }
  },
  props: {
    resource: {
      type: Object,
      default: () => new Retailer()
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
      await this.$store.dispatch(`${RETAILER_STORE_KEY}/${this.currentAction}Retailer`, { retailer: this.retailer })
      this.closeDrawer()
    },
  },
  computed: {
    ...mapGetters({
      products: `productStore/products`,
      retailerSaveLoading: `retailerStore/retailerSaveLoading`,
    }),
    creating() {
      return this.currentAction === 'create'
    },
    currentAction() {
      return _.get(this.retailer, 'id') ? 'update' : 'create'
    },
    loadingAction() {
      return _.get(this.retailer, 'id') ? 'updating' : 'creating'
    },
  },
  watch: {
    resource(newVal) {
      this.retailer = new Retailer({ ...newVal })
    }
  }
}
</script>
<style lang="sass">
  .image-upload-wrapper
    img
      width: 30rem
  .upload-label
    height: 4rem
    line-height: 4rem
</style>