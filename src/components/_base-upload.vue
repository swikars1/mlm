<template>
  <div class="image-upload-wrapper">
    <div
      class="ivu-upload upload-button-wrapper"
      @click="handleUploadClick"
    >
      <div class="ivu-upload ivu-upload-drag">
        <input
          ref="fileInput"
          type="file"
          class="ivu-upload-input"
          @change="setImage"
        >
        <p class="upload-label">
          {{ label }}
        </p>
      </div>
    </div>
    <img :src="imageSrc">
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageSrc: null,
      formData: null
    }
  },
  props: {
    label: {
      type: String,
      default: 'Choose a file'
    }
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0]
      if (file && !file.type.includes('image/')) {
        alert('Please select an image file')
        return
      }
      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = event => {
          this.imageSrc = event.target.result
          this.$emit('on-file-select', this.imageSrc)
        }
        file && reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
    removeImage() {
      this.$listeners.input(null)
      this.imageSrc = null
    },
    handleUploadClick() {
      this.$refs['fileInput'].click()
    }
  }
}
</script>

<style lang="sass">
.upload-and-preview
  display: flex
  justify-content: flex-end
  align-items: center
  .upload-preview
    position: relative
    margin-right: auto
    button
      position: absolute
      height: 100%
      width: 100%
      display: flex
      align-items: center
      justify-content: center
      display: none
      &:hover
        background: rgba(0,0,0,0.5)
        color: white
      &:hover
        button
          display: flex
      img
        margin-left: .02rem
        border-radius: .02rem
        width: 50px
  .upload
    display: inline-block
    outline: none
    input
      display: none
    .upload-button
      background: none
      border: none
      color: #333
      padding: 0
      margin-right: 1rem
      &:hover
        background: none
        text-decoration: underline
        box-shadow: none
        animation: 0
      &:focus
        box-shadow: none
      .ivu-icon
        font-size: 20.5rem
      span
        font-size: 1.2rem
        margin: 0
      &:hover
        box-shadow: none
</style>
