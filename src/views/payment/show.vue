<template>
  <div class="show-page">
    <List>
      <ListItem>
        <ListItemMeta title="Name" :description="payment.name"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Customer" :description="payment.customer" />
      </ListItem>
      <ListItem>
        <ListItemMeta title="Retailer" :description="payment.retailer" />
      </ListItem>
      <ListItem>
        <ListItemMeta title="Expenditure" :description="String(payment.expenditure)"/>
      </ListItem>
      <ListItem>
        <ListItemMeta title="Percentage" :description="String(payment.percent)" />
      </ListItem>
      <ListItem>
        <ListItemMeta title="Total Cashback" :description="String(payment.cashback)" />
      </ListItem>
      <ListItem>
        <ListItemMeta title="Self Profit" :description="String(payment.selfProfit)" />
      </ListItem>
      <ListItem>
        <ListItemMeta title="Company's Profit" :description="String(payment.companyProfit)" />
      </ListItem>
      <ListItem>
        <ListItemMeta :title="`Each Parent Profit (No. of Parent - ${payment.profitParentCount})`" :description="String(payment.eachParentProfit)" />
      </ListItem>
    </List>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { List, ListItem, ListItemMeta } from 'view-design'


const STORE_KEY = 'paymentStore'

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
    this.$store.dispatch(`${STORE_KEY}/getPayment`, { id: this.id })
  },
  computed: {
    ...mapGetters({
      payment: `${STORE_KEY}/payment`
    })
  }
}
</script>

<style scoped>
  .show-page{
    margin: 2rem;
  }
</style>