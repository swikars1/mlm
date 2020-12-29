<template>
	<div class="dashboard-wrapper">
     	<h1>Dashboard</h1>
      <div class="dashboard-content">
        <div class="count-wrapper">
          <div class="each-count pointer" @click="handleNavigate('customers')">
            <div class="icon-wrapper customer-icon">
              <Icon type="ios-people" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">{{ widgets.totalCustomers }}</span>
              <span class="count-label">Total Customers</span>
            </div>
          </div>
          <div class="each-count pointer" @click="handleNavigate('products')">
            <div class="icon-wrapper product-icon">
              <Icon type="ios-cart" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">{{ widgets.totalProducts }}</span>
              <span class="count-label">Total Products</span>
            </div>
          </div>
          <div class="each-count pointer" @click="handleNavigate('retailers')">
            <div class="icon-wrapper retailer-icon">
              <Icon type="ios-briefcase" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">{{ widgets.totalRetailers }}</span>
              <span class="count-label">Total Shops</span>
            </div>
          </div>
          <div class="each-count">
            <div class="icon-wrapper cash-icon">
              <Icon type="md-cash" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">{{ widgets.todayIncome }}</span>
              <span class="count-label">Today's Income</span>
            </div>
          </div>
          <div class="each-count">
            <div class="icon-wrapper cash-icon">
              <Icon type="md-cash" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">{{ widgets.monthlyIncome }}</span>
              <span class="count-label">Monthly Income</span>
            </div>
          </div>
          <div class="each-count">
            <div class="icon-wrapper cash-icon">
              <Icon type="ios-cash" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">{{ widgets.totalIncome }}</span>
              <span class="count-label">Total Income</span>
            </div>
          </div>
        </div>

        <div class="dashboard-chart-wrapper">
          <BaseEchart
            type="pie"
            title="Male/Female Customer"
            :pie-data="genderPieChart"
          />
<!--           <BaseEchart
            type="bar"
            title="Male/Female Customer"
            :x-axis="['a','b','c','d','e','f','g']"
            :legend="['Male/Female']"
            :bar-data="barData" /> -->
        </div>
      </div>
  </div>
</template>

<script>
import { Icon } from 'view-design'
import { mapGetters } from 'vuex'

const DASHBOARD_STORE_KEY = 'dashboardStore'
export default {
  components: {
    Icon
  },
  data() {
    return {

    }
  },
  methods: {
    handleNavigate(route) {
      this.$router.push(route)
    },
  },
  mounted() {
    this.$store.dispatch(`${DASHBOARD_STORE_KEY}/getWidgets`)
    this.$store.dispatch(`${DASHBOARD_STORE_KEY}/getGenderPieChart`)
  },
  computed: {
    ...mapGetters({
      widgets: `${DASHBOARD_STORE_KEY}/widgets`,
      genderPieChart: `${DASHBOARD_STORE_KEY}/genderPieChart`
    })
  }
}
</script>
<style lang="sass" scoped>
  .dashboard-wrapper
    padding: 2rem
    height: 100%
    background: linear-gradient(to bottom, #f3f3f3, #ffffff)
    h1
      text-align: center
    .dashboard-content
      .count-wrapper
        display: grid
        grid-template-columns: repeat(3, 2fr)
        padding: 0 14rem
        .each-count
          display: flex
          place-content: center
          place-items: center
          height: 15rem
          width: 28rem
          background: white
          border-radius: 8px
          padding: 1rem
          box-shadow: 0px 0px 6px 0px rgba(207, 207, 207, 75%)
          margin-top: 2rem
          .icon-wrapper
            height: 7rem
            width: 7rem
            display: flex
            place-content: center
            align-items: center
            border-radius: 50%
          .customer-icon
            background: #fbedfd
            i
              color: #9e00ce
          .product-icon
            background: #eaf6fc
            i
              color: #5D95F4
          .category-icon
            background: #fff3f5
            i
              color: #FE7D40
          .retailer-icon
            background: #FFE9F4
            i
              color: #FF0072
          .cash-icon
            background: #e3f3d5
            i
              color: #403b3d
          .text-count
            display: flex
            flex-direction: column
            margin-left: 3.4rem
            .actual-count
              font-weight: 700
              color: black
              font-size: 2.2rem
            .count-label
              color: grey
              font-weight: 500
</style>
