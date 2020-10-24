<template>
  <div class="show-page">
    <List>
      <ListItem>
        <ListItemMeta title="Name" :description="retailerType.name"/>
      </ListItem>
    </List> 
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { List, ListItem, ListItemMeta } from 'view-design'


const STORE_KEY = 'retailerTypeStore'

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
    this.$store.dispatch(`${STORE_KEY}/getRetailerType`, {id: this.id})
  },
  computed: {
    ...mapGetters({
      retailerType: `${STORE_KEY}/retailerType`
    })
  }
}
</script>

<style scoped>
  .show-page{
    margin: 2rem;
  }
</style>