<template>
  <div class="show-page">
    {{ user }}
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
        <ListItemMeta title="Address" :description="user.address"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Birth Date" :description="user.birthday"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Expenditure" :description="user.expenditure"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Referal Code" :description="user.referCode"/>
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