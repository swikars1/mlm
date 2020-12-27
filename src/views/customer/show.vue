<template>
  <div class="show-page">
    <img class="drawer-image" :src="customer.imageUrl">
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
        <ListItemMeta title="Expenditure" :description="String(customer.expenditure || 0)"/>
      </ListItem>
    </List>
    <div>
      <List>
        <ListItem>
          <ListItemMeta title="ID Front" />
          <BaseImageViewer :src="customer.frontUrl || ''" />
        </ListItem>
        <ListItem>
          <ListItemMeta title="ID Back" />
          <BaseImageViewer :src="customer.backUrl || ''" />
        </ListItem>
      </List>
    </div>
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
    display: flex;
    flex-direction: column;
  }
  .drawer-image{
    width: 15rem;
    align-self: center;
  }
</style>