<template>
    <div>
    	<img class="pointer" :src="src" @click="handleImageClick">
    <div class="view-image" v-if="showImage">
    	<img :src="src" alt="">
    </div>
    </div>
</template>

<script>
export default {
  data() {
  	return {
  		showImage: false
  	}
  },
  props: {
    src: {
      type: String,
      required: true
    }
  },
  methods: {
  	handleImageClick() {
  		this.showImage = true
  	}
  }
}
	
</script>

<style lang="sass" scoped>
.view-image
  position: fixed;
  right: 34%;
  top: 10px;
  zoom: 4.1;
  z-index: 1;
</style>