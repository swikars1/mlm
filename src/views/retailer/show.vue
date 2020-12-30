<template>
  <div class="show-page">
    <List>
      <ListItem>
        <ListItemMeta title="Name" :description="retailer.name"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Phone No." :description="retailer.phoneNo"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Address" :description="retailer.address"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Pan Number" :description="String(retailer.panNumber)"/>
      </ListItem>
    </List>
    <div>
      <BaseImageViewer class="d-inline-block p-a-2" v-for="(image, index) in retailer.avatars" :key="index" :src="image" />
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { List, ListItem, ListItemMeta } from 'view-design'


const STORE_KEY = 'retailerStore'

export default {
  data() {
    return {

    }
  },
  components: {
    List, 
    ListItem, 
    ListItemMeta
    
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.$store.dispatch(`${STORE_KEY}/getRetailer`, {id: this.id})
  },
  computed: {
    ...mapGetters({
      retailer: `${STORE_KEY}/retailer`
    })
  }
}
</script>

<style scoped>
  .show-page{
    margin: 2rem;
  }
</style>