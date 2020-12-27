<template>
  <div>
    <section>
      <BaseUpload 
        v-for="(item, index) in details" 
        :key="index" 
        :label="item.label" 
        @on-file-select="(blob) => handleFileSelect(blob, item.type)"
      />
    </section>
  </div>
</template>
<script>
import base64ToBlob from '@/helpers/base64-to-blob'
import plural from '@/helpers/resource-name-pluralizer'

export default {
  data() {
    return {
      image: null,
      loading: false
    }
  },
  props: {
    resource: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      default: 'Choose an image to upload'
    },
    hideFooter: {
      type: Boolean,
      required: false
    },
    details: {
      type: Array,
      required: true
    }
  },
  methods: {
    async handleFileSelect(blob, type) {
      let formData = new FormData()
      try {
        formData.append('avatar', base64ToBlob(blob))
        this.image = formData
      } catch (err) {
        if (err instanceof TypeError || err instanceof DOMException) {
          this.image = null
        } else {
          throw err
        }
      }
      this.$emit('on-file-choose', this.image)
      this.loading = true
      await this.$store.dispatch(`${this.resource}Store/uploadDocument`,
        {
          id: this.id,
          image: this.image,
          resourceName: plural(this.resource),
          type
        }
      )
      this.$emit('on-upload', true)
      this.loading = false
    },
    async handleUpload() {
      this.loading = true
      await this.$store.dispatch(`${this.resource}Store/uploadImage`,
        {
          id: this.id,
          image: this.image,
          resourceName: plural(this.resource)
        }
      )
      this.$emit('on-upload', true)
      this.loading = false
    }
  }    
}
</script>