<template>
  <div class="show-page">
    {{ product }}
    <img  class="drawer-image" :src="product.imageUrl">
    <List>
      <ListItem>
        <ListItemMeta title="Name" :description="product.name"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Price" :description="String(product.price)"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Description" :description="product.description"/>
      </ListItem>
      <ListItem v-for="(item, index) in product.category" :key="item.id">
        <ListItemMeta :title="index===0 ? `Category` : '' "  :description="item.name"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Retailer" :description="product.retailer"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Product Code" :description="product.code"/>
      </ListItem>
    </List> 
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { List, ListItem, ListItemMeta } from 'view-design'


const STORE_KEY = 'productStore'

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
    this.$store.dispatch(`${STORE_KEY}/getProduct`, {id: this.id})
  },
  computed: {
    ...mapGetters({
      product: `${STORE_KEY}/product`
    })
  }
}
</script>

