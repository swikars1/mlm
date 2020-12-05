<template>
  <div class="show-page">
    <BaseImageViewer :src="user.imageUrl"></BaseImageViewer>
    <List>
      <ListItem>
        <ListItemMeta title="Name" :description="user.name"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Email" :description="user.email"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Phone No." :description="user.phoneNo"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Gender" :description="user.gender"/>
      </ListItem>
    </List> 
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { List, ListItem, ListItemMeta } from 'view-design'


const STORE_KEY = 'userStore'

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
    this.$store.dispatch(`${STORE_KEY}/getUser`, {id: this.id})
  },
  computed: {
    ...mapGetters({
      user: `${STORE_KEY}/user`
    })
  }
}
</script>

<style scoped>
  .show-page{
    margin: 2rem;
  }
</style>