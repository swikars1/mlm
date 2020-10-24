<template>
  <div class="show-page">
    <List>
      <ListItem>
        <ListItemMeta title="Name" :description="customer.name"/> 
      </ListItem>
      <ListItem>
        <ListItemMeta title="Email" :description="customer.email"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Phone No." :description="customer.phoneNo"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Address" :description="customer.address"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Birth Date" :description="customer.birthday"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Expenditure" :description="String(customer.expenditure)"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Referal Code" :description="customer.referCode"/>
      </ListItem>
    </List> 
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { List, ListItem, ListItemMeta } from 'view-design'


const STORE_KEY = 'customerStore'

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
    },
  },
  mounted() {
    this.$store.dispatch(`${STORE_KEY}/getCustomer`, {id: this.id})
  },
  computed: {
    ...mapGetters({
      customer: `${STORE_KEY}/customer`
    })
  }
}
</script>

<style scoped>
  .show-page{
    margin: 2rem;
  }
</style>