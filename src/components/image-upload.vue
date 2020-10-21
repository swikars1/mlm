<template>
  <div>
    <section>
      <BaseUpload label="Choose an image to upload" @on-file-select="(blob) => handleFileSelect(blob)" />
    </section>
    <footer>
      <BaseButton
        :loading="loading"
        html-type="submit"
        @click="handleUpload"
      >
        Upload
      </BaseButton>
    </footer>
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
    }
  },
  methods: {
    handleFileSelect(blob) {
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