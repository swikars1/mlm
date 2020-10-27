<template>
	<div class="dashboard-wrapper">
     	<h1>Dashboard</h1>
      <div class="dashboard-content">
        <div class="count-wrapper">
          <div class="each-count">
            <div class="icon-wrapper customer-icon">
              <Icon type="ios-people" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">12</span>
              <span class="count-label">Total Customers</span>
            </div>
          </div>
          <div class="each-count">
            <div class="icon-wrapper product-icon">
              <Icon type="ios-cart" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">22</span>
              <span class="count-label">Total Products</span>
            </div>
          </div>
          <div class="each-count">
            <div class="icon-wrapper category-icon">
              <Icon type="md-cart" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">18</span>
              <span class="count-label">Total Categories</span>
            </div>
          </div>
          <div class="each-count">
            <div class="icon-wrapper retailer-icon">
              <Icon type="ios-briefcase" size="28"/>
            </div>
            <div class="text-count">
              <span class="actual-count">15</span>
              <span class="count-label">Total Retailers</span>
            </div>
          </div>
        </div>
        <div class="dashboard-chart-wrapper">
          <BaseEchart :pie-data="[
                {name: 'A', value: 1212},
                {name: 'B', value: 2323},
                {name: 'C', value: 1919}
            ]"/>
          
        </div>
      </div>
  </div>


</template>

<script>
import { Icon } from 'view-design'

export default {
  components: {
    Icon
  },
  data() {
    return {
      pie: {
        series: {
          type: 'pie',
          data: [
              {name: 'A', value: 1212},
              {name: 'B', value: 2323},
              {name: 'C', value: 1919}
          ]
        }
      }
    }
  }
}
</script>
<style lang="sass" scoped>
  .dashboard-wrapper
    padding: 2rem
    height: 100%
    background: #F3F7FB
    h1
      text-align: center
    .dashboard-content
      margin-top: 5rem
      .count-wrapper
        display: flex
        justify-content: space-between
        padding: 0 4rem
        flex-wrap: wrap
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
            height: 5rem
            width: 5rem
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
